import { IsometricPoint, Texture } from '../@types';
export declare const resetElement: (element: HTMLElement) => void;
export declare const processElement: (element: HTMLElement) => void;
export declare const setPlane: (element: HTMLElement, plane: 'top' | 'front' | 'side') => void;
export declare const setPosition: (element: HTMLElement, position: IsometricPoint) => void;
export declare const setTexture: (element: HTMLElement, texture: Texture) => void;
export declare const processDOMElements: () => void;
