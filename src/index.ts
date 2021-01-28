import { TYPE_UNDEFINED } from '@constants';
import {
    processDOMElements,
    processElement,
    setPlane,
    setPosition,
    setTexture,
    resetElement
} from '@dom'; 

export const IsometricCSS = {
    processDOM: processDOMElements,
    processElement,
    setPlane,
    setPosition,
    setTexture,
    resetElement,
};

if (typeof window !== TYPE_UNDEFINED) {
    window.IsometricCSS = IsometricCSS;
    window.addEventListener('DOMContentLoaded', IsometricCSS.processDOM);
}

declare global {
    interface Window { IsometricCSS: typeof IsometricCSS; }
}