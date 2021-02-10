import { Plane, View } from '@types';
import { NAMESPACE } from '@constants';

export const getPlaneFromElement = (element: HTMLElement): Plane => {

    const view = element.dataset.view
        ? element.dataset.view as View
        : null;
    const right = +(element.dataset.right || 0);
    const left = +(element.dataset.left || 0);
    const top = +(element.dataset.top || 0);
    const rotationAxis = element.dataset.rotationAxis
        ? element.dataset.rotationAxis as View
        : null;
    const rotationValue = +(element.dataset.rotationValue || 0);
    const textureUrl = element.dataset.texture;
    const textureSize = element.dataset.textureSize || 'cover';
    const texturePixelated = element.dataset.texturePixelated === 'true';

    const plane: Plane = {};

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
        'texturePixelated'
    ]);
};