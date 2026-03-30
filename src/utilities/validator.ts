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

export const isUndefined = (input: unknown): input is undefined => input === undefined;
export const validNumber = (input: unknown): boolean => !isNaN(+`${input}`);
export const validString = (input: unknown): input is string => (
    !!input &&
    typeof input === 'string' &&
    input.trim().length > 0
);
export const validNumberNonZero = (input: unknown): boolean => validNumber(input) && Number(input) !== 0;
export const validBoolean = (input: unknown): input is boolean => typeof input === 'boolean';
export const undefinedOrValidString = (input: unknown): boolean => isUndefined(input) || validString(input);
export const undefinedOrValidBoolean = (input: unknown): boolean => isUndefined(input) || validBoolean(input);
export const undefinedOrValidNumber = (input: unknown): input is (undefined | number) => isUndefined(input) || validNumber(input);
export const validStringByRegExp = (input: unknown, regexp: RegExp): boolean => (
    isUndefined(input) ||
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
    !isUndefined(texture) &&
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