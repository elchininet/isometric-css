import { VIEW } from '@constants';

export type View = keyof typeof VIEW;

export type Fallbacks = Record<string, string | number>[];

export type Rule = {
    [key: string]: string | number;
} & {
    fallbacks?: Fallbacks;
};

export interface RuleData {
    rule: Rule;
    declaration: string;
    selector: string;
}

export interface Point {
    x: number;
    y: number;
}

export interface IsometricPosition {
    right?: number;
    left?: number;
    top?: number;
}

export interface Rotation {
    axis: View;
    value: number;
}

export interface Texture {
    url: string;
    size?: string;
    pixelated?: boolean;
}

export interface Plane {
    view?: View;
    position?: IsometricPosition;
    rotation?: Rotation;
    texture?: Texture;
}

export interface ElementData {
    plane: Plane;
    selector: string;
    rule: Rule;
}

export type Matrix = number[][];

export interface SinCos {
    sin: number;
    cos: number;
}