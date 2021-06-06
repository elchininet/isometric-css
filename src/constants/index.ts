export const NAMESPACE = 'isometric';
export const DECIMALS = 6;
export const HSQRT3 = +((Math.sqrt(3) / 2).toFixed(DECIMALS));
export const SCALE = Math.sqrt(3 / 2);
export const ROT_60 = Math.PI / 3;
export const ROT_45 = Math.PI / 4;
export const ROT_CMA = Math.atan(Math.SQRT2);
export const PROPS_REG_EXP = /(?: |,|^)(right|left|top)\s*:\s*(-?\d*?\.?\d+)(?= |,|$)/g;
export const EASING_REG_EXP = /^((ease(-in|-out|-in-out)?)|linear|(step(-start|-end)))$/;

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