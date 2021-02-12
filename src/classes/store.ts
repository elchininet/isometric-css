import { ElementData, Plane, View, IsometricPosition, Rotation, Texture } from '@types';
import { VIEW, AXIS } from '@constants';
import { getPlaneFromElement, resetElementIsometricData } from '@utilities/dom';
import { Styles } from '@classes/styles';

class Store {

    constructor() {
        this._elements = new Map<HTMLElement, ElementData>();
        this._classes = new Map<string, HTMLElement[]>();
        this._styles = new Styles();
    }

    private _elements: Map<HTMLElement, ElementData>;
    private _classes: Map<string, HTMLElement[]>;
    private _styles: Styles;

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

    private process(element: HTMLElement, plane: Plane): void {

        const elementData = this._elements.get(element);
        const ruleData = this._styles.getRuleData(plane);
        
        if (elementData) {
            
            if (elementData.selector === ruleData.selector) return;

            this.removeClasses(element, elementData.selector);

        }

        element.classList.add(ruleData.selector);

        const elements = this._classes.get(ruleData.selector);

        if (elements) {            
            elements.push(element);
        } else {
            this._styles.insert(ruleData.selector, ruleData.declaration);
            this._classes.set(ruleData.selector, [element]);
        }

        this._elements.set(element, {
            plane,
            selector: ruleData.selector,
            rule: ruleData.rule
        });

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
    }

    public setElementView(element: HTMLElement, view: View): void {
        if (
            view === VIEW.top ||
            view === VIEW.front ||
            view === VIEW.side
        ) {
            const elementData = this._elements.get(element);
            this.process(element,
                elementData
                    ? { ...elementData.plane, view }
                    : { view }
            );
        }        
    }

    public setElementPosition(element: HTMLElement, position: IsometricPosition): void {
        if (+position.right || +position.left || +position.top) {
            const elementData = this._elements.get(element);
            this.process(element,
                elementData
                    ? { ...elementData.plane, position: { ...elementData.plane.position, ...position } }
                    : { position }
            );
        }
    }

    public setElementRotation(element: HTMLElement, rotation: Rotation): void {
        if (
            (
                rotation.axis === AXIS.right ||
                rotation.axis === AXIS.left ||
                rotation.axis === AXIS.top
            ) &&
            +rotation.value
        ) {
            const elementData = this._elements.get(element);
            this.process(element,
                elementData
                    ? { ...elementData.plane, rotation }
                    : { rotation }
            );
        }
    }

    public setElementTexture(element: HTMLElement, texture: Texture): void {
        if (
            typeof texture.url === 'string' &&
            (
                !texture.size ||
                typeof texture.size === 'string'
            ) &&
            (
                !texture.pixelated ||
                typeof texture.pixelated === 'boolean'
            )
        ) {
            const elementData = this._elements.get(element);
            this.process(element,
                elementData
                    ? { ...elementData.plane, texture: { ...elementData.plane.texture, ...texture } }
                    : { texture }
            );
        }        
    }

}

export default new Store();