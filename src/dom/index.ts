import jss, { StyleSheet, Rule as JssRule } from 'jss';
import camelCase from 'jss-plugin-camel-case';
import { Rule, IsometricPoint, Texture } from '@types'; 
import { TYPE_UNDEFINED, NAMESPACE, PLANE_BASE_CSS, PLANE } from '@constants';
import { getBackground, getPlaneObject, getPosition, hashObject } from '@utilities';

jss.setup({
    createGenerateId: () => {
        // @ts-ignore
        return (rule: JssRule): string => hashObject(rule.key);
    },
    plugins: [
        camelCase()
    ]
});

const IS_BROWSER = typeof window !== TYPE_UNDEFINED && typeof window.document !== TYPE_UNDEFINED;
const sheet: StyleSheet = jss.createStyleSheet({}).attach();

sheet.addRules({
    base: PLANE_BASE_CSS,
    top: getPlaneObject(PLANE.TOP),
    front: getPlaneObject(PLANE.FRONT),
    side: getPlaneObject(PLANE.SIDE),
});

const addRuleToElement = (element: HTMLElement, rule: Rule): void => {
    const styleHash = hashObject(rule, false);
    if (!sheet.getRule(styleHash)) {
        sheet.addRule(styleHash, rule);
    }    
    element.classList.add(sheet.classes[styleHash]);
    element.dataset.classes = element.dataset.classes || '';
    element.dataset.classes += `{${styleHash}}`;
};

const removeDataAttributes = (element: HTMLElement, attributes: string[]): void => {
    attributes.forEach((name: string): void => {
        if (element.dataset[name]) {
            delete element.dataset[name];
        }
    });
};

export const resetElement = (element: HTMLElement): void => {
    element.classList.remove(sheet.classes.base);
    element.classList.remove(sheet.classes.top);
    element.classList.remove(sheet.classes.front);
    element.classList.remove(sheet.classes.side);
    if (element.dataset.classes) {
        const classes = element.dataset.classes.match(/[^\{\}]+/g);
        classes.forEach((name: string): void => {
            element.classList.remove(sheet.classes[name]);
        });
        removeDataAttributes(element, ['classes']);
    }
};

export const processElement = (element: HTMLElement): void => {
        
    // Access element data
    const plane = element.dataset.plane;
    const texture = element.dataset.texture;
    const textureSize = element.dataset.textureSize;
    const texturePixelated = element.dataset.texturePixelated === 'true';
    const right = +element.dataset.right || 0;
    const left = +element.dataset.left || 0;
    const top = +element.dataset.top || 0;

    // Add the base class
    if (!element.classList.contains(sheet.classes.base)) {
        element.classList.add(sheet.classes.base);
    }    

    // Add the plane classes
    if (
        plane === 'top' ||
        plane === 'front' ||
        plane === 'side'
    ) {
        element.classList.add(sheet.classes[plane]);
        removeDataAttributes(element, ['plane']);
    }

    // Add position classes
    if (right || left || top) {
        setPosition(element, {right, left, top});
        removeDataAttributes(element, ['right', 'left', 'top']);
    }

    // Add the texture classes
    if (texture) {
        setTexture(element, {
            url: texture,
            size: textureSize,
            pixelated: texturePixelated
        });
        removeDataAttributes(element, ['texture', 'textureSize', 'texturePixelated']);
    }

    // Remove the class
    element.classList.remove(NAMESPACE);

};

export const setPlane = (
    element: HTMLElement,
    plane: 'top' | 'front' | 'side'
): void => {
    if (
        plane === 'top' ||
        plane === 'front' ||
        plane === 'side'
    ) {
        if (!element.classList.contains(sheet.classes.base)) {
            element.classList.add(sheet.classes.base);
        }
        element.classList.add(sheet.classes[plane]);
    }
};

export const setPosition = (
    element: HTMLElement,
    position: IsometricPoint
): void => {
    if (!element.classList.contains(sheet.classes.base)) {
        element.classList.add(sheet.classes.base);
    }   
    addRuleToElement(
        element,
        getPosition(
            position.right,
            position.left,
            position.top
        )
    );
};

export const setTexture = (
    element: HTMLElement,
    texture: Texture
) => {
    if (!element.classList.contains(sheet.classes.base)) {
        element.classList.add(sheet.classes.base);
    }
    addRuleToElement(
        element,
        getBackground(
            texture.url,
            texture.size,
            texture.pixelated
        )
    );
};

export const processDOMElements = () => {
    if (IS_BROWSER) {
        Array.prototype.forEach.call(document.querySelectorAll(`.${NAMESPACE}`), (element: Element): void => {
            if (element instanceof HTMLElement) {
                processElement(element);
            }            
        });
    }
};