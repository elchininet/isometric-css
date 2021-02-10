import { Point, SinCos, IsometricPosition } from '@types'; 
import { DECIMALS, HSQRT3 } from '@constants';

export const round = (n: number): number => {
    const exp = Math.pow(10, DECIMALS);
    return Math.round(n * exp) / exp;
};

export const radian = (a: number): number => a * Math.PI / 180;

export const sincos = (r: number): SinCos => ({
    sin: round(Math.sin(r)),
    cos: round(Math.cos(r))
});

export const isometricToPoint = (position: IsometricPosition): Point => {
    const { right = 0, left = 0, top = 0 } = position;
    return {
        x: round((right - left) * HSQRT3),
        y: round(((right + left) / 2 - top)),
    };
};