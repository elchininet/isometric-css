import {
    ElementData,
    Plane,
    View,
    IsometricPosition,
    Rotation,
    Texture,
    Animation
} from '@types';
import {
    getPlaneFromElement,
    resetElementIsometricData,
    getParentRotations
} from '@utilities/dom';
import {
    validView,
    validPosition,
    validRotation,
    validTexture,
    validAnimation
} from '@utilities/validator';
import { Styles } from '@classes/styles';

class Store {

    constructor() {
        this._elements = new Map<HTMLElement, ElementData>();
        this._classes = new Map<string, HTMLElement[]>();
        this._keyframes = new Map<string, HTMLElement[]>();
        this._styles = new Styles();
    }

    private _elements: Map<HTMLElement, ElementData>;
    private _classes: Map<string, HTMLElement[]>;
    private _keyframes: Map<string, HTMLElement[]>;
    private _styles: Styles;
    
    private hasAnimation(element: HTMLElement): boolean {
        const elementData = this._elements.get(element);
        return !!(elementData && elementData.keyframesName);
    }

    private removeClasses(element: HTMLElement, selector: string): void {

        element.classList.remove(selector);

        const elements = this._classes.get(selector);        

        const index = elements.findIndex((e: HTMLElement): boolean => e === element);

        elements.splice(index, 1);

        if (elements.length === 0) {

            this._classes.delete(selector);
            this._styles.remove(selector);

        }

    }

    private removeKeyframes(element: HTMLElement, keyframesName: string): void {

        const elements = this._keyframes.get(keyframesName);

        const index = elements.findIndex((e: HTMLElement): boolean => e === element);

        elements.splice(index, 1);

        if (elements.length === 0) {

            this._keyframes.delete(keyframesName);
            this._styles.remove(keyframesName);

        }

    }

    private process(element: HTMLElement, plane: Plane): void {

        const elementData = this._elements.get(element);
        const ruleData = this._styles.getRuleData(plane);
        
        if (!ruleData) return;

        const newElementData: ElementData = {
            plane,
            selector: ruleData.selector,
            rule: ruleData.rule
        };

        if (elementData) {
            
            if (
                elementData.selector === ruleData.selector &&
                elementData.keyframesName === ruleData.keyframesName
            ) {
                return;
            }

            this.removeClasses(element, elementData.selector);

            if (elementData.keyframesName) {
                this.removeKeyframes(element, elementData.keyframesName);
            }            

        }

        element.classList.add(ruleData.selector);

        const elements = this._classes.get(ruleData.selector);
        
        if (elements) {            
            elements.push(element);
        } else {
            this._styles.insert(ruleData.selector, ruleData.declaration);
            this._classes.set(ruleData.selector, [element]);
        }

        if (
            ruleData.keyframesName &&
            ruleData.keyframesDeclaration
        ) {

            const keyframes = this._keyframes.get(ruleData.keyframesName);

            if (keyframes) {
                keyframes.push(element);
            } else {
                this._styles.insertKeyframes(ruleData.keyframesName, ruleData.keyframesDeclaration);
                this._keyframes.set(ruleData.keyframesName, [element]);
            }

            newElementData.keyframes = ruleData.keyframes;
            newElementData.keyframesName = ruleData.keyframesName;

        }

        this._elements.set(element, newElementData);

    }

    public addElement(element: HTMLElement): void {
        const plane = getPlaneFromElement(element);
        this.process(element, plane);
    }

    public removeElement(element: HTMLElement): void {
        resetElementIsometricData(element);
        const elementData = this._elements.get(element);
        if (!elementData) return;
        this._elements.delete(element);
        this.removeClasses(element, elementData.selector);
        if (elementData.keyframesName) {
            this.removeKeyframes(element, elementData.keyframesName);
        }        
    }

    public setElementView(element: HTMLElement, view: View): void {
        if (validView(view)) {
            const elementData = this._elements.get(element);
            this.process(element,
                elementData
                    ? { ...elementData.plane, view }
                    : { view, parentRotations: getParentRotations(element) }
            );
        }        
    }

    public setElementPosition(element: HTMLElement, position: IsometricPosition): void {
        if (validPosition(position)) {
            const elementData = this._elements.get(element);
            this.process(element,
                elementData
                    ? { ...elementData.plane, position: { ...elementData.plane.position, ...position } }
                    : { position, parentRotations: getParentRotations(element) }
            );
        }
    }

    public setElementRotation(element: HTMLElement, rotation: Rotation): void {
        if (validRotation(rotation)) {
            const elementData = this._elements.get(element);
            this.process(element,
                elementData
                    ? { ...elementData.plane, rotation }
                    : { rotation, parentRotations: getParentRotations(element) }
            );
        }
    }

    public setElementTexture(element: HTMLElement, texture: Texture): void {
        if (validTexture(texture)) {
            const elementData = this._elements.get(element);
            this.process(element,
                elementData
                    ? { ...elementData.plane, texture: { ...elementData.plane.texture, ...texture } }
                    : { texture, parentRotations: getParentRotations(element) }
            );
        }        
    }

    public setElementAnimation(element: HTMLElement, animation: Animation): void {
        if (validAnimation(animation)) {
            const elementData = this._elements.get(element);
            this.process(element,
                elementData
                    ? {
                        ...elementData.plane,
                        animation: elementData.plane.animation
                            ? {
                                ...elementData.plane.animation,
                                ...animation
                            }
                            : animation 
                    }
                    : { animation, parentRotations: getParentRotations(element) }
            );
        } 
    }

    public resetAnimation(element: HTMLElement): void {
        if (this.hasAnimation(element)) {
            const classes = element.className;
            element.className = '';
            element.offsetWidth;
            element.className = classes;
        }
    }

    public pauseAnimation(element: HTMLElement): void {
        if (this.hasAnimation(element)) {
            element.dataset.animationRunning = 'false';
        }
    }

    public resumeAnimation(element: HTMLElement): void {
        if (this.hasAnimation(element)) {
            element.dataset.animationRunning = 'true';
        }
    }

}

export default new Store();