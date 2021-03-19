import { VIEW, AXIS } from '@constants';

export type View = keyof typeof VIEW;
export type Axis = keyof typeof AXIS;

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
    axis: Axis;
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
    parentRotations: Rotation[];
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