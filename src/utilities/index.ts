import { Point, Plane, Rule } from '@types'; 
import { HSQRT3, DECIMALS, PLANE_CSS } from '@constants';

const round = (n: number, d: number): number => {
    const exp = Math.pow(10, d);
    return Math.round(n * exp) / exp;
};

const kebab = (prop: string): string => prop.replace(/[A-Z]/g, '-$&').toLowerCase();

export const cssObjectToString = (cssObject: Rule): string => {
    const entries = Object.entries(cssObject);
    const dclArray = entries.map(([decl, value]) => `${kebab(decl)}: ${value}`);
    return dclArray.join(';\n') + ';';
};

export const isometricToPoint = (right: number = 0, left: number = 0, top: number = 0): Point => {
    return {
        x: round((right - left) * HSQRT3, DECIMALS),
        y: round(((right + left) / 2 - top), DECIMALS),
    };
};

export const getPlaneObject = (plane: Plane): Rule => ({
    transform: PLANE_CSS[plane],
    WebkitTransform: PLANE_CSS[plane],
    MsTransform: PLANE_CSS[plane],
});

export const getPlaneString = (plane: Plane): string => cssObjectToString(
    getPlaneObject(plane)
);

export const getPosition = (
    right: number,
    left: number,
    top: number
): Rule => {
    const point = isometricToPoint(right, left, top);
    return {
        left: `${point.x}px`,
        top: `${point.y}px`,
    };
};

export const getPositionString = (
    right: number,
    left: number,
    top: number
): string => cssObjectToString(
    getPosition(right, left, top)
);

export const getBackground = (
    url: string,
    size: string = 'cover',
    pixelated: boolean = false
): Rule => {
    const styles: Rule = {
        backgroundImage: `url(${url})`,
        backgroundSize: size,
    };
    if (pixelated) {
        styles.imageRendering = 'pixelated';
        styles.fallbacks = [
            { imageRendering: 'crisp-edges' }
        ];
        styles.MsInterpolationMode = 'nearest-neighbor';
    }
    return styles;
};

export const getBackgroundString = (
    url: string,
    size: string = 'cover',
    pixelated: boolean = false
): string => cssObjectToString(
    getBackground(url, size, pixelated)
);