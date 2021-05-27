import { VIEW, AXIS } from '@constants';

export type View = keyof typeof VIEW;
export type Axis = keyof typeof AXIS;

export type Fallbacks = Record<string, string | number>[];

export type FallbackRule = {
    fallbacks?: Fallbacks;
};

export type Rule = {
    [key: string]: string | number;
} & FallbackRule;

export type KeyframesProps = Record<string, string>;

export type Keyframes = {
    from: KeyframesProps,
    to: KeyframesProps
} | Record<string, KeyframesProps>;

export interface RuleData {
    rule: Rule;
    declaration: string;
    selector: string;
    keyframes?: Keyframes;
    keyframesDeclaration?: string;
    keyframesName?: string;
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

export interface Animation {
    position: IsometricPosition;
    duration?: number;
    easing?: string;
    repeat?: number;
    bounce?: boolean;
}

export interface Plane {
    view?: View;
    position?: IsometricPosition;
    rotation?: Rotation;
    texture?: Texture;
    parentRotations: Rotation[];
    animation?: Animation;
}

export interface ElementData {
    plane: Plane;
    selector: string;
    rule: Rule;
    keyframesName?: string;
    keyframes?: Keyframes;
}

export type Matrix = number[][];

export interface SinCos {
    sin: number;
    cos: number;
}