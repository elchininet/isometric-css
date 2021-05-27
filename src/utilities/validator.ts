import {
    VIEW,
    AXIS,
    EASING_REG_EXP
} from '@constants';
import {
    IsometricPosition,
    View,
    Rotation,
    Texture,
    Animation
} from '@types';

export const validNumber = (input: unknown): boolean => !isNaN(+`${input}`);
export const validString = (input: unknown): boolean =>
    input &&
    typeof input === 'string' &&
    input.trim().length > 0;
export const validNumberNonZero = (input: unknown): boolean => validNumber(input) && +input !== 0;
export const validUndefined = (input: unknown): boolean => typeof input === 'undefined';
export const validBoolean = (input: boolean): boolean => typeof input === 'boolean';
export const undefinedOrValidString = (input: string): boolean => validUndefined(input) || validString(input);
export const undefinedOrValidBoolean = (input: boolean): boolean => validUndefined(input) || validBoolean(input);
export const undefinedOrValidNumber = (input: number): boolean => validUndefined(input) || validNumber(input);
export const validStringByRegExp = (input: string, regexp: RegExp): boolean => (
    validUndefined(input) ||
    (
        validString(input) &&
        regexp.test(input)
    )
);

export const validView = (view: View): boolean => (
    view &&
    (
        view === VIEW.top ||
        view === VIEW.front ||
        view === VIEW.side
    )   
);

export const validPosition = (position: IsometricPosition): boolean => (
    position &&
    (
        validNumberNonZero(position.right) ||
        validNumberNonZero(position.left) ||
        validNumberNonZero(position.top)
    )
);

export const validRotation = (rotation: Rotation): boolean => (
    rotation &&
    validNumber(rotation.value) &&
    (
        rotation.axis === AXIS.right ||
        rotation.axis === AXIS.left ||
        rotation.axis === AXIS.top
    )
);

export const validTexture = (texture: Texture): boolean => (
    texture &&
    validString(texture.url) &&
    undefinedOrValidString(texture.size) &&
    undefinedOrValidBoolean(texture.pixelated)
);

export const validAnimation = (animation: Animation): boolean => (
    animation &&
    validPosition(animation.position) &&
    validStringByRegExp(animation.easing, EASING_REG_EXP) &&
    undefinedOrValidNumber(animation.duration) &&    
    undefinedOrValidNumber(animation.repeat) &&
    undefinedOrValidBoolean(animation.bounce)
);