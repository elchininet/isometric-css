import { View, IsometricPosition, Rotation, Texture } from '@types';
import { TYPE_UNDEFINED, NAMESPACE } from '@constants';
import Store from '@classes/store';

export const IsometricCSS = {

    processDOM(): void {
        Array.prototype.forEach.call(document.querySelectorAll<HTMLElement>(`.${NAMESPACE}`), (element: HTMLElement): void => {
            Store.addElement(element);           
        });        
    },

    processElement(element: HTMLElement): void {
        Store.addElement(element);
    },

    resetElement(element: HTMLElement): void {
        Store.removeElement(element);
    },

    setView(element: HTMLElement, view: View): void {
        Store.setElementView(element, view);
    },

    setRotation(element: HTMLElement, rotation: Rotation): void {
        Store.setElementRotation(element, rotation);
    },

    setPosition(element: HTMLElement, position: IsometricPosition): void {
        Store.setElementPosition(element, position);
    },

    setTexture(element: HTMLElement, texture: Texture): void {
        Store.setElementTexture(element, texture);
    }

};

/* istanbul ignore next */ 
if (
    typeof window !== TYPE_UNDEFINED &&
    typeof document !== TYPE_UNDEFINED
) {

    window.IsometricCSS = IsometricCSS;

    window.addEventListener('DOMContentLoaded', () => {
        IsometricCSS.processDOM();
    });
    
}

declare global {
    interface Window { IsometricCSS: typeof IsometricCSS; }
}