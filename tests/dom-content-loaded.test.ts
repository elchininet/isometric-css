import '../src';
import { HSQRT3 } from '../src/constants';
import { base, top } from './constants';

describe('Test DOMContentLoaded', (): void => {

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

        element.classList.add('isometric');
        element.dataset.plane = 'top';
        element.dataset.right = '100';
        element.dataset.top = '100';
        element.dataset.texture = '/images/test-image.png';
        element.dataset.textureSize = '50px 50px';
        element.dataset.texturePixelated = 'true';

        window.document.dispatchEvent(new Event('DOMContentLoaded', {
            bubbles: true,
            cancelable: true
        }));

        expect(element.classList.contains(base)).toBeTruthy();
        expect(element.classList.contains(top)).toBeTruthy();

        const style = getComputedStyle(element);

        expect(style).toHaveProperty('left', `${HSQRT3 * 100}px`);
        expect(style).toHaveProperty('top', '-50px');
        expect(style).toHaveProperty('background-image', 'url(/images/test-image.png)');
        expect(style).toHaveProperty('background-size', '50px 50px');
        expect(style).toHaveProperty('image-rendering', 'pixelated');

    });

});