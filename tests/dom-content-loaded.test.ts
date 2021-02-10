import '../src';
import { HSQRT3, NAMESPACE } from '../src/constants';

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

        element.classList.add(NAMESPACE);
        element.dataset.view = 'top';
        element.dataset.right = '100';
        element.dataset.top = '100';
        element.dataset.texture = '/images/test-image.png';
        element.dataset.textureSize = '50px 50px';
        element.dataset.texturePixelated = 'true';

        window.document.dispatchEvent(new Event('DOMContentLoaded', {
            bubbles: true,
            cancelable: true
        }));

        expect(element.classList.length).toBe(2);

        const style = getComputedStyle(element);

        expect(style).toHaveProperty('left', `${HSQRT3 * 100}px`);
        expect(style).toHaveProperty('top', '-50px');
        expect(style).toHaveProperty('background-image', 'url(/images/test-image.png)');
        expect(style).toHaveProperty('background-size', '50px 50px');
        expect(style).toHaveProperty('image-rendering', 'crisp-edges');
        expect(window).toHaveProperty('IsometricCSS');
        expect(window.IsometricCSS).toHaveProperty('processDOM');
        expect(window.IsometricCSS).toHaveProperty('processElement');
        expect(window.IsometricCSS).toHaveProperty('resetElement');
        expect(window.IsometricCSS).toHaveProperty('setView');
        expect(window.IsometricCSS).toHaveProperty('setPosition');
        expect(window.IsometricCSS).toHaveProperty('setTexture');

    });

});