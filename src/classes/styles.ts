import { hash } from '@utilities/string';
import {
    Plane,
    View,
    Rotation,
    Rule,
    Fallbacks,
    Keyframes,
    RuleData
} from '@types';
import {
    VIEW,
    SCALE,
    NAMESPACE
} from '@constants';
import { kebab } from '@utilities/string';
import { isometricToPoint, round } from '@utilities/math';
import { getViewMatrix } from '@utilities/matrix';

export class Styles {

    private _globalStyle: HTMLStyleElement = null;
    private _style: HTMLStyleElement = null;
    
    private scale = round(SCALE);
    private P50 = '50%';
    private transformBefore = `translate(-${this.P50}, -${this.P50})`;
    private tranformAfterTop = `translate(-${this.P50}, ${this.P50})`;
    private transformAfterFront = `translate(-${this.P50}, -${this.P50})`;
    private transformAfterSide = `translate(${this.P50}, -${this.P50})`;

    private baseDeclarations = {
        position: 'absolute'
    };

    private transformOriginDeclarations = {
        transformOrigin: `${this.P50} ${this.P50}`,
        MsTransformOrigin: `${this.P50} ${this.P50}`,
        WebkitTransformOrigin: `${this.P50} ${this.P50}`
    };

    private get sheet(): CSSStyleSheet | null {
        return this._style
            ? this._style.sheet
            : null;
    }

    private getTransform(
        view: View,
        parentRotations: Rotation[],
        rotation?: Rotation
    ): string | null {

        const matrix = getViewMatrix(
            view,
            parentRotations,
            rotation            
        );

        if (!matrix) return null;

        const m1 = round(matrix[0][0]);
        const m2 = round(matrix[1][0]);
        const m3 = round(matrix[0][1]);
        const m4 = round(matrix[1][1]);

        const matrixString = (`matrix(${m1},${m2},${m3},${m4},0,0)`);

        const transform = `${this.transformBefore} ${matrixString} scale(${this.scale})`;

        switch(view) {
            case VIEW.top:
               return `${transform} ${this.tranformAfterTop}`;
            case VIEW.front:
                return `${transform} ${this.transformAfterFront}`;
            case VIEW.side:
                return `${transform} ${this.transformAfterSide}`;
        }

    }

    private insertGlobalStyles(): void {
        this._globalStyle.sheet.insertRule(
            `[data-animation][data-animation-running="false"] {
                animation-play-state: paused;
            }`
        );
    }

    private init(): void {
        const head = document.getElementsByTagName('head')[0];
        this._globalStyle = document.createElement('style');
        this._style = document.createElement('style');
        this._globalStyle.dataset.isometricGlobal = '';
        this._style.dataset.isometric = '';
        head.appendChild(this._globalStyle);
        head.appendChild(this._style);
        this.insertGlobalStyles();
    }

    private getKeyframes(plane: Plane): Keyframes | null {
        if (plane.animation) {
            const initialPosition = plane.position || { right: 0, left: 0, top: 0 };
            const initialCoords = isometricToPoint(
                initialPosition,
                plane.parentRotations
            );
            const finalCoords = isometricToPoint(
                { ...initialPosition, ...plane.animation.position },
                plane.parentRotations
            );
            return {
                from: {
                    left: `${initialCoords.x}px`,
                    top: `${initialCoords.y}px` 
                },
                to: {
                    left: `${finalCoords.x}px`,
                    top: `${finalCoords.y}px`
                }
            };
        }
        return null;
    }

    private getRule(plane: Plane, keyframesName: string): Rule {
        const transform = this.getTransform(
            plane.view,
            plane.parentRotations,
            plane.rotation            
        );

        const rule: Rule = transform
            ? {
                ...this.baseDeclarations,
                ...this.transformOriginDeclarations,
                transform,
                MsTransform: transform,
                WebkitTransform: transform
            }
            : (
                plane.position ||
                plane.texture ||
                (
                    plane.animation && keyframesName
                )
            )
                ? { ...this.baseDeclarations }
                : {};

        if (plane.position) {
            const position = isometricToPoint(
                plane.position,
                plane.parentRotations                
            );
            rule.left = `${position.x}px`;
            rule.top = `${position.y}px`;
        }

        if (plane.texture) {
            rule.backgroundImage = `url("${plane.texture.url}")`;
            rule.backgroundSize = plane.texture.size || 'cover';
            if (plane.texture.pixelated) {
                rule.MsInterpolationMode = 'nearest-neighbor';
                rule.imageRendering = 'pixelated';
                rule.fallbacks = [
                    {
                        imageRendering: 'crisp-edges'
                    }
                ];
            }
        }

        if (plane.animation && keyframesName) {
            rule.animationName = keyframesName;
            rule.animationDuration = plane.animation.duration
                ? `${plane.animation.duration}ms`
                : '1000ms';
            rule.animationTimingFunction = plane.animation.easing || 'linear';
            rule.animationIterationCount = plane.animation.repeat
                ? (
                    plane.animation.bounce
                        ? `${plane.animation.repeat * 2}`
                        : `${plane.animation.repeat}`
                )
                : 'infinite';
            rule.animationDirection = plane.animation.bounce
                ? 'alternate'
                : 'normal';
            rule.animationFillMode = 'both';
        }
        
        return rule;
    }

    public getDeclarationString(rule: Rule | Keyframes): string {
        const entries = Object.entries<string | number | Rule | Fallbacks>(rule);
        return entries.reduce((decl: string, entry: [string, string | number | Rule | Fallbacks]): string => {
            if (Array.isArray(entry[1])) {
                const fallbacks = entry[1].map((fallback: Rule): string => {
                    return this.getDeclarationString(fallback);
                }).join('\n');
                return `${decl}${fallbacks}`;
            } else if (typeof entry[1] === 'object') {
                return `${decl}\n${kebab(entry[0])} {${this.getDeclarationString(entry[1])}\n}`;
            } else {
                return `${decl}\n    ${kebab(entry[0])}: ${entry[1]};`;
            }
        }, '');
    }

    public getSelector(declaration: string): string {
        return `${NAMESPACE}-${hash(declaration)}`;
    }

    public getRuleData(plane: Plane): RuleData | null {

        const keyframes = this.getKeyframes(plane);
        const declarationKeyframes = keyframes
            ? this.getDeclarationString(keyframes)
            : null;
        const keyframesName = declarationKeyframes
            ? this.getSelector(declarationKeyframes)
            : null;

        const rule = this.getRule(plane, keyframesName);

        if (Object.keys(rule).length) {

            const declaration = this.getDeclarationString(rule);
            const selector = this.getSelector(declaration);
            
            const data: RuleData = {
                rule,
                declaration,
                selector
            };

            if (keyframes) {
                data.keyframes = keyframes;
                data.keyframesDeclaration = declarationKeyframes;
                data.keyframesName = keyframesName;
            }

            return data;

        }

        return null;
        
    }

    public insert(selector: string, declaration: string): void {
        if (!this.sheet) this.init();
        this.sheet.insertRule(`.${selector} {\n${declaration}\n}`);
    }

    public insertKeyframes(selector: string, declaration: string): void {
        this.sheet.insertRule(`@keyframes ${selector} {\n${declaration}\n}`);
    }

    public remove(selector: string): void {     
        Array.prototype.some.call(this.sheet.cssRules, (rule: CSSStyleRule | CSSKeyframesRule, index: number): boolean => {           
            if (
                'name' in rule &&                
                rule.name === selector
            ) {
                this.sheet.deleteRule(index);
                return true;
            }
            if (
                'selectorText' in rule &&
                rule.selectorText.slice(1) === selector
            ) {
                this.sheet.deleteRule(index);
                return true;
            }         
            return false;
        });
    }

}