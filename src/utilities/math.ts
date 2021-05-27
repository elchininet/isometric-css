import {
    Point,
    Rotation,
    SinCos,
    IsometricPosition
} from '@types'; 
import {
    DECIMALS,
    HSQRT3,
    AXIS
} from '@constants';

export const round = (n: number): number => {
    const exp = Math.pow(10, DECIMALS);
    return Math.round(n * exp) / exp;
};

export const radian = (a: number): number => a * Math.PI / 180;

export const sincos = (r: number): SinCos => ({
    sin: round(Math.sin(r)),
    cos: round(Math.cos(r))
});

export const rotatePoint = (x: number, y: number, rotate: number): Point => {
    const hypotenuse = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    const angle = Math.atan2(y, x) + radian(rotate);
    return {
        x: Math.cos(angle) * hypotenuse,
        y: Math.sin(angle) * hypotenuse
    };
};

export const isometricToPoint = (position: IsometricPosition, rotations: Rotation[]): Point => {
    let { right = 0, left = 0, top = 0 } = position;
    if (rotations && rotations.length) {
        const reverseRotations = [...rotations].reverse();
        reverseRotations.forEach((rotation: Rotation): void => {
            switch (rotation.axis) {
                case AXIS.top: {
                    const point = rotatePoint(right, left, rotation.value);
                    right = point.x;
                    left = point.y;
                    break;
                }
                case AXIS.right: {
                    const point = rotatePoint(left, top, rotation.value);
                    left = point.x;
                    top = point.y;
                    break;
                }
                case AXIS.left: {
                    const point = rotatePoint(top, right, rotation.value);
                    top = point.x;
                    right = point.y;
                    break;
                }
            }
        });
    }
    return {
        x: round((right - left) * HSQRT3),
        y: round(((right + left) / 2 - top)),
    };
};