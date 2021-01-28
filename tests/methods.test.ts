import { IsometricCSS } from '../src';
import { HSQRT3 } from '../src/constants';
import { base, top, front, side } from './constants';

describe('Test methods', (): void => {

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

    it('setPlane', (): void => {

        // setPlane top
        IsometricCSS.setPlane(element, 'top');

        expect(element.classList.length).toBe(2);
        expect(element.classList.contains(base)).toBeTruthy();
        expect(element.classList.contains(top)).toBeTruthy();

        IsometricCSS.resetElement(element);

        expect(element.classList.length).toBe(0);

        // setPlane front
        IsometricCSS.setPlane(element, 'front');

        expect(element.classList.length).toBe(2);
        expect(element.classList.contains(base)).toBeTruthy();
        expect(element.classList.contains(front)).toBeTruthy();

        IsometricCSS.resetElement(element);

        // setPlane front
        IsometricCSS.setPlane(element, 'side');

        expect(element.classList.length).toBe(2);
        expect(element.classList.contains(base)).toBeTruthy();
        expect(element.classList.contains(side)).toBeTruthy();

        IsometricCSS.resetElement(element);

        IsometricCSS.setPlane(element, 'fake' as 'top');

        expect(element.classList.length).toBe(0);

        element.classList.add(base);

        IsometricCSS.setPlane(element, 'top');

        expect(element.classList.length).toBe(2);

    });

    it('setPosition', (): void => {
        
        IsometricCSS.setPosition(element, {
            right: 0,
            left: 0,
            top: 0
        });

        expect(element.classList.contains(base)).toBeTruthy();

        let style = getComputedStyle(element);

        expect(style).toHaveProperty('left', '0px');
        expect(style).toHaveProperty('left', '0px');

        IsometricCSS.resetElement(element);

        expect(element.classList.length).toBe(0);

        IsometricCSS.setPosition(element, {
            right: 100,
            left: 100,
            top: 100
        });

        style = getComputedStyle(element);

        expect(style).toHaveProperty('left', '0px');
        expect(style).toHaveProperty('left', '0px');

        IsometricCSS.resetElement(element);

        IsometricCSS.setPosition(element, {
            right: 100
        });

        style = getComputedStyle(element);

        expect(style).toHaveProperty('left', `${HSQRT3 * 100}px`);
        expect(style).toHaveProperty('top', '50px');

        IsometricCSS.resetElement(element);

        IsometricCSS.setPosition(element, {
            left: 100
        });

        style = getComputedStyle(element);

        expect(style).toHaveProperty('left', `-${HSQRT3 * 100}px`);
        expect(style).toHaveProperty('top', '50px');

        IsometricCSS.resetElement(element);

        IsometricCSS.setPosition(element, {
            top: 100
        });

        style = getComputedStyle(element);

        expect(style).toHaveProperty('left', '0px');
        expect(style).toHaveProperty('top', '-100px');

        IsometricCSS.resetElement(element);

        IsometricCSS.setPosition(element, {
            right: 0,
            left: 0,
            top: 0
        });

        IsometricCSS.setPosition(element, {
            right: 100
        });

        expect(element.classList.length).toBe(2);

        style = getComputedStyle(element);

        expect(style).toHaveProperty('left', `${HSQRT3 * 100}px`);
        expect(style).toHaveProperty('top', '50px');

    });

    it('setTexture', (): void => {
        
        IsometricCSS.setTexture(element, {
            url: '/images/test-image.png'
        });

        expect(element.classList.contains(base)).toBeTruthy();

        let style = getComputedStyle(element);

        expect(style).toHaveProperty('background-image', 'url(/images/test-image.png)');
        expect(style).toHaveProperty('background-size', 'cover');
        expect(style).toHaveProperty('image-rendering', '');

        IsometricCSS.resetElement(element);

        expect(element.classList.length).toBe(0);

        IsometricCSS.setTexture(element, {
            url: '/images/test-image.png',
            size: '50px 50px'
        });

        style = getComputedStyle(element);

        expect(style).toHaveProperty('background-image', 'url(/images/test-image.png)');
        expect(style).toHaveProperty('background-size', '50px 50px');
        expect(style).toHaveProperty('image-rendering', '');

        IsometricCSS.resetElement(element);

        IsometricCSS.setTexture(element, {
            url: '/images/test-image.png',
            size: '100px 100px',
            pixelated: true
        });

        style = getComputedStyle(element);

        expect(style).toHaveProperty('background-image', 'url(/images/test-image.png)');
        expect(style).toHaveProperty('background-size', '100px 100px');
        expect(style).toHaveProperty('image-rendering', 'pixelated');

        IsometricCSS.resetElement(element);

        IsometricCSS.setTexture(element, {
            url: '/images/test-image.png'
        });

        IsometricCSS.setTexture(element, {
            url: '/images/test-image2.png',
            size: '100px 100px',
            pixelated: true
        });

        expect(element.classList.length).toBe(2);

        style = getComputedStyle(element);

        expect(style).toHaveProperty('background-image', 'url(/images/test-image2.png)');
        expect(style).toHaveProperty('background-size', '100px 100px');
        expect(style).toHaveProperty('image-rendering', 'pixelated');

    });

});