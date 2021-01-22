import { PLANE, PLANE_BASE_CSS } from '@constants';
import {
    getPosition,
    getPositionString,
    cssObjectToString,
    getPlaneObject,
    getPlaneString,
    getBackground,
    getBackgroundString
} from '@utilities';

export const Isometric = {
    base: PLANE_BASE_CSS,
    top: getPlaneObject(PLANE.TOP),
    front: getPlaneObject(PLANE.FRONT),
    side: getPlaneObject(PLANE.SIDE),
    getPosition,
    getBackground,
};

export const IsometricCSS = {
    base: cssObjectToString(PLANE_BASE_CSS),
    top: getPlaneString(PLANE.TOP),
    front: getPlaneString(PLANE.FRONT),
    side: getPlaneString(PLANE.SIDE),
    getPosition: getPositionString,
    getBackground: getBackgroundString,
};