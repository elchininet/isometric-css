import {
    Plane,
    Rotation,
    View,
    Axis,
    Animation,
    IsometricPosition
} from '@types';
import {
    NAMESPACE,
    PROPS_REG_EXP,
    EASING_REG_EXP
} from '@constants';
import { validNumber } from '@utilities/validator';

export const getParentRotations = (element: HTMLElement): Rotation[] => {
    const rotations: Rotation[] = [];
    while (element.parentElement && element.parentElement !== document.documentElement) {
        const parent = element.parentElement;
        if (
            !parent.dataset.view &&
            parent.dataset.rotationAxis
        ) {
            rotations.push({
                axis: parent.dataset.rotationAxis as Axis,
                value: +(parent.dataset.rotationValue || 0)
            });
        }
        element = element.parentElement;
    }
    return rotations;
};

export const getAnimation = (
    str: string | undefined,
    duration: string | undefined,
    easing: string | undefined,
    repeat: string | undefined,
    bounce: string | undefined
): Animation | null => {
    if (str) {
        const position: IsometricPosition = {};
        let match;
        while((match = PROPS_REG_EXP.exec(str)) !== null) {
            const prop = match[1] as Axis;
            const value = +match[2];
            position[prop] = value;
        }
        
        if (Object.keys(position).length) {
            
            const animation: Animation = {
                position,
                repeat: repeat && +repeat > 0
                    ? +repeat
                    : 0,
                bounce: bounce && bounce.trim() === 'true'
            };

            if (easing && EASING_REG_EXP.test(easing.trim())) {
                animation.easing = easing.trim();
            }

            if (validNumber(duration)) {
                animation.duration = +duration;
            }
            
            return animation;
        }
    }    
    return null;
};

export const getPlaneFromElement = (element: HTMLElement): Plane => {

    const dataset = element.dataset;
    const view = dataset.view
        ? dataset.view as View
        : null;
    const right = +(dataset.right || 0);
    const left = +(dataset.left || 0);
    const top = +(dataset.top || 0);
    const rotationAxis = dataset.rotationAxis
        ? dataset.rotationAxis as Axis
        : null;
    const rotationValue = +(dataset.rotationValue || 0);
    const textureUrl = dataset.texture;
    const textureSize = dataset.textureSize || 'cover';
    const texturePixelated = dataset.texturePixelated === 'true';
    const parentRotations = getParentRotations(element);
    const animation = getAnimation(
        dataset.animation,
        dataset.animationDuration,
        dataset.animationEasing,
        dataset.animationRepeat,
        dataset.animationBounce
    );

    const plane: Plane = { parentRotations };
    
    if (view) {
        plane.view = view;
    }

    if (right || left || top) {
        plane.position = { right, left, top };
    }

    if (rotationAxis && rotationValue) {
        plane.rotation = {
            axis: rotationAxis,
            value: rotationValue
        };
    }

    if (textureUrl) {
        plane.texture = {
            url: textureUrl,
            size: textureSize,
            pixelated: texturePixelated            
        };
    }

    if (animation) {
        plane.animation = animation;
    }

    return plane;
};

const removeDataAttributes = (element: HTMLElement, attributes: string[]): void => {
    attributes.forEach((name: string): void => {
        if (element.dataset[name]) delete element.dataset[name];
    });
};

export const resetElementIsometricData = (element: HTMLElement): void => {
    element.classList.remove(NAMESPACE);
    removeDataAttributes(element, [
        'view',
        'right',
        'left',
        'top',
        'rotationAxis',
        'rotationValue',
        'texture',
        'textureSize',
        'texturePixelated',
        'animation',
        'animationDuration',
        'animationEasing',
        'animationRepeat',
        'animationBounce',
        'animationRunning'
    ]);
};