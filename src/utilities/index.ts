import hash from '@emotion/hash';
import { Point, Plane, Rule } from '@types'; 
import { NAMESPACE, HSQRT3, DECIMALS, PLANE_CSS } from '@constants';

const round = (n: number, d: number): number => {
    const exp = Math.pow(10, d);
    return Math.round(n * exp) / exp;
};

const kebab = (prop: string): string => prop.replace(/[A-Z]/g, '-$&').toLowerCase();

export const cssObjectToString = (cssObject: Rule, endColon = true): string => {
    const entries = Object.entries<string | Record<string, string>[]>(cssObject);
    const dclArray = entries.map(([decl, value]) => {
        if (Array.isArray(value)) {
            return value.map((fObject: Rule) => cssObjectToString(fObject, false));
        }
        return `${kebab(decl)}: ${value}`;
    });
    return dclArray.join(';\n') + `${endColon ? ';' : ''}`;
};

export const isometricToPoint = (right = 0, left = 0, top = 0): Point => {
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

export const getBackground = (
    url: string,
    size = 'cover',
    pixelated = false
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

export const hashObject = (obj: Rule, namespace = true): string => {
    const objStr = cssObjectToString(obj);
    if (namespace) {
        return `${NAMESPACE}-${hash(objStr)}`;
    }
    return hash(objStr);
};