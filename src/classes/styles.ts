import { hash } from '@utilities/string';
import { Plane, View, Rotation, Rule, Fallbacks, RuleData } from '@types';
import { VIEW, SCALE, NAMESPACE } from '@constants';
import { kebab } from '@utilities/string';
import { isometricToPoint, round } from '@utilities/math';
import { getViewMatrix } from '@utilities/matrix';

export class Styles {

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

    private declarationString(declarations: Rule): string {
        const entries = Object.entries<string | number | Fallbacks>(declarations);
        return entries.reduce((decl: string, entry: [string, string | number | Fallbacks]): string => {
            if (Array.isArray(entry[1])) {
                const fallbacks = entry[1].map((fallback: Rule): string => {
                    return this.declarationString(fallback);
                }).join('\n');
                return `${decl}\n    ${fallbacks}`;
            } else {
                return `${decl}\n    ${kebab(entry[0])}: ${entry[1]};`;
            }
        }, '');
    }

    private tranformPlaneToRule(plane: Plane): Rule {

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
            : {
                ...this.baseDeclarations
            };

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

        return rule;

    }

    private init(): void {
        this._style = document.createElement('style');
        this._style.dataset.isometric = '';
        document.getElementsByTagName('head')[0].appendChild(this._style);      
    }

    public getRule(plane: Plane): Rule {
        return this.tranformPlaneToRule(plane);
    }

    public getDeclarationString(rule: Rule): string {
        return this.declarationString(rule);
    }

    public getSelector(declaration: string): string {
        return `${NAMESPACE}-${hash(declaration)}`;
    }

    public getRuleData(plane: Plane): RuleData {
        const rule = this.getRule(plane);
        const declaration = this.getDeclarationString(rule);
        const selector = this.getSelector(declaration);
        return {
            rule,
            declaration,
            selector
        };
    }

    public insert(selector: string, declaration: string): void {
        if (!this.sheet) this.init();
        this.sheet.insertRule(`.${selector} {\n${declaration}\n}`);
    }

    public remove(selector: string): void {     
        Array.prototype.some.call(this.sheet.cssRules, (rule: CSSStyleRule, index: number): boolean => {
            if (rule && rule.selectorText.slice(1) === selector) {
                this.sheet.deleteRule(index);
                return true;
            }
            return false;
        });
    }

}