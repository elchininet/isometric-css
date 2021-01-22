import { PLANE } from '@constants';

export interface Point {
    x: number;
    y: number;
}

export interface IsometricPoint {
    right?: number;
    left?: number;
    top?: number;
}

export type Plane = keyof typeof PLANE;

export interface Positions {
    [key: string]: IsometricPoint;
}

export type Rule = {
    [key: string]: string;
} & {
    fallbacks?: Record<string, string>[];
};

export interface Rules {
    [key: string]: Rule;
}

export interface ElementID {
    id: string;
    element: HTMLElement;
}