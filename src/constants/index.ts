export const NAMESPACE = 'isometric';
export const DECIMALS = 6;
export const SQRT3 = +(Math.sqrt(3).toFixed(DECIMALS));
export const HSQRT3 = +((Math.sqrt(3) / 2).toFixed(DECIMALS));

export enum PLANE {
    TOP = 'TOP',
    FRONT = 'FRONT',
    SIDE = 'SIDE'
}

export const PLANE_BASE_CSS = {
    position: 'absolute',
    transformOrigin: '0 0',
    MsTransformOrigin: '0 0',
    WebkitTransformOrigin: '0 0'
};

export const PLANE_CSS = {
    [PLANE.TOP]: `rotate(-60deg) skewY(30deg) scaleX(${HSQRT3}) translate(-100%, 0%)`,
    [PLANE.FRONT]: `skewY(-30deg) scaleX(${HSQRT3}) translate(-100%, -100%)`,
    [PLANE.SIDE]: `skewY(30deg) scaleX(${HSQRT3}) translate(0%, -100%)`,
};

export const TYPE_UNDEFINED = 'undefined';

export enum CLASS_TYPE {
    POSITION,
    BACKGROUND
}