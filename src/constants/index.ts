export const NAMESPACE = 'isometric';
export const DECIMALS = 6;
export const HSQRT3 = +((Math.sqrt(3) / 2).toFixed(DECIMALS));
export const SCALE = Math.sqrt(3 / 2);
export const ROT_60 = Math.PI / 3;
export const ROT_45 = Math.PI / 4;
export const ROT_CMA = Math.atan(Math.SQRT2);

export enum VIEW {
    top = 'top',
    front = 'front',
    side = 'side'
}

export enum AXIS {
    right = 'right',
    left = 'left',
    top = 'top'
}

export const TYPE_UNDEFINED = 'undefined';