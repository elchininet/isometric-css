import { IsometricCSS } from '../src';
import { PLANE, PLANE_CSS, HSQRT3 } from '../src/constants';
import { base, top, front, side } from './constants';

describe('Test process elements', (): void => {

    let element: HTMLDivElement;

    beforeEach((): void => {

        element = document.createElement('div');
        document.body.appendChild(element);

    });

    afterEach((): void => {
        if (element.parentNode && element.parentNode === document.body) {
            document.body.removeChild(element);
        }        
    });

    it('processElement', (): void => {

        element.dataset.plane = 'top';

        IsometricCSS.processElement(element);

        expect(element.classList.contains(base)).toBeTruthy();
        expect(element.classList.contains(top)).toBeTruthy();
        expect(element.classList.contains(front)).toBeFalsy();
        expect(element.classList.contains(side)).toBeFalsy();


        let style = getComputedStyle(element);

        expect(style).toHaveProperty('transform', PLANE_CSS[PLANE.TOP]);

        IsometricCSS.resetElement(element);

        expect(element.classList.length).toBe(0);
        expect(element.dataset.plane).toBe(undefined);

        element.dataset.plane = 'front';

        IsometricCSS.processElement(element);

        expect(element.classList.contains(base)).toBeTruthy();
        expect(element.classList.contains(top)).toBeFalsy();
        expect(element.classList.contains(front)).toBeTruthy();
        expect(element.classList.contains(side)).toBeFalsy();
        
        style = getComputedStyle(element);

        expect(style).toHaveProperty('transform', PLANE_CSS[PLANE.FRONT]);

        IsometricCSS.resetElement(element);

        expect(element.classList.length).toBe(0);
        expect(element.dataset.plane).toBe(undefined);

        element.dataset.plane = 'side';

        IsometricCSS.processElement(element);

        expect(element.classList.contains(base)).toBeTruthy();
        expect(element.classList.contains(top)).toBeFalsy();
        expect(element.classList.contains(front)).toBeFalsy();
        expect(element.classList.contains(side)).toBeTruthy();
        
        style = getComputedStyle(element);

        expect(style).toHaveProperty('transform', PLANE_CSS[PLANE.SIDE]);

        IsometricCSS.resetElement(element);
        
        expect(element.classList.length).toBe(0);
        expect(element.dataset.plane).toBe(undefined);

        IsometricCSS.resetElement(element);
        
        element.dataset.right = '100';
        element.dataset.top = '100';

        IsometricCSS.processElement(element);

        expect(element.classList.contains(base)).toBeTruthy();
        expect(element.classList.contains(top)).toBeFalsy();
        expect(element.classList.contains(front)).toBeFalsy();
        expect(element.classList.contains(side)).toBeFalsy();

        style = getComputedStyle(element);

        expect(style).toHaveProperty('left', `${HSQRT3 * 100}px`);
        expect(style).toHaveProperty('top', '-50px');

        IsometricCSS.resetElement(element);

        element.dataset.texture = '/images/test-image.png';

        IsometricCSS.processElement(element);

        style = getComputedStyle(element);

        expect(style).toHaveProperty('background-image', 'url(/images/test-image.png)');
        expect(style).toHaveProperty('background-size', 'cover');
        expect(style).toHaveProperty('image-rendering', '');

        element.dataset.texture = '/images/test-image.png';
        element.dataset.textureSize = '50px 50px';

        IsometricCSS.processElement(element);

        style = getComputedStyle(element);

        expect(style).toHaveProperty('background-image', 'url(/images/test-image.png)');
        expect(style).toHaveProperty('background-size', '50px 50px');
        expect(style).toHaveProperty('image-rendering', '');

        element.dataset.texture = '/images/test-image.png';
        element.dataset.texturePixelated = 'true';

        IsometricCSS.processElement(element);

        style = getComputedStyle(element);

        expect(style).toHaveProperty('background-image', 'url(/images/test-image.png)');
        expect(style).toHaveProperty('background-size', 'cover');
        expect(style).toHaveProperty('image-rendering', 'pixelated');

    });

});