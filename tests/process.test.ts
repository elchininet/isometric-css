import { IsometricCSS } from '../src';
import { HSQRT3 } from '../src/constants';
import { top, front, side } from './constants';

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

    it('processElement and resetElement', (): void => {

        element.dataset.view = 'top';

        IsometricCSS.processElement(element);

        expect(element.classList.length).toBe(1);
        
        let style = getComputedStyle(element);

        expect(style).toHaveProperty('transform-origin', '50% 50%');
        expect(style).toHaveProperty('position', 'absolute');
        expect(style).toHaveProperty('transform', top);

        IsometricCSS.resetElement(element);

        expect(element.classList.length).toBe(0);
        expect(element.dataset.view).toBe(undefined);

        element.dataset.view = 'front';

        IsometricCSS.processElement(element);

        expect(element.classList.length).toBe(1);
        
        style = getComputedStyle(element);
        
        expect(style).toHaveProperty('transform-origin', '50% 50%');
        expect(style).toHaveProperty('position', 'absolute');
        expect(style).toHaveProperty('transform', front);

        IsometricCSS.resetElement(element);

        element.dataset.view = 'side';

        IsometricCSS.processElement(element);

        expect(element.classList.length).toBe(1);
        
        style = getComputedStyle(element);
        
        expect(style).toHaveProperty('transform-origin', '50% 50%');
        expect(style).toHaveProperty('position', 'absolute');
        expect(style).toHaveProperty('transform', side);

        IsometricCSS.resetElement(element);
        
        element.dataset.right = '100';
        element.dataset.top = '100';

        IsometricCSS.processElement(element);

        expect(element.classList.length).toBe(1);

        style = getComputedStyle(element);
        
        expect(style).toHaveProperty('position', 'absolute');
        expect(style).toHaveProperty('left', `${HSQRT3 * 100}px`);
        expect(style).toHaveProperty('top', '-50px');
        expect(style).toHaveProperty('transform-origin', '');
        expect(style).toHaveProperty('transform', '');

        IsometricCSS.resetElement(element);

        expect(element.classList.length).toBe(0);
        expect(element.dataset.right).toBe(undefined);
        expect(element.dataset.top).toBe(undefined);

        element.dataset.view = 'top';
        element.dataset.rotationAxis = 'right';
        element.dataset.rotationValue = '30';
        
        IsometricCSS.processElement(element);

        style = getComputedStyle(element);

        expect(element.classList.length).toBe(1);
        expect(style).toHaveProperty('transform', 'translate(-50%, -50%) matrix(0.612372,0.054695,0.707107,0.408248,0,0) scale(1.224745) translate(-50%, 50%)');

        IsometricCSS.resetElement(element);

        element.dataset.view = 'front';
        element.dataset.rotationAxis = 'top';
        element.dataset.rotationValue = '60';

        IsometricCSS.processElement(element);

        style = getComputedStyle(element);

        expect(element.classList.length).toBe(1);
        expect(style).toHaveProperty('transform', 'translate(-50%, -50%) matrix(0.965926,0.149429,0,0.816496,0,0) scale(1.224745) translate(-50%, -50%)');

        IsometricCSS.resetElement(element);

        element.dataset.texture = '/images/test-image.png';

        IsometricCSS.processElement(element);

        style = getComputedStyle(element);

        expect(style).toHaveProperty('background-image', 'url(/images/test-image.png)');
        expect(style).toHaveProperty('background-size', 'cover');
        expect(style).toHaveProperty('image-rendering', '');

        IsometricCSS.resetElement(element);

        expect(element.classList.length).toBe(0);
        expect(element.dataset.texture).toBe(undefined);

        element.dataset.texture = '/images/test-image.png';
        element.dataset.textureSize = '50px 50px';

        IsometricCSS.processElement(element);

        style = getComputedStyle(element);

        expect(style).toHaveProperty('background-image', 'url(/images/test-image.png)');
        expect(style).toHaveProperty('background-size', '50px 50px');
        expect(style).toHaveProperty('image-rendering', '');

        IsometricCSS.resetElement(element);

        expect(element.classList.length).toBe(0);
        expect(element.dataset.texture).toBe(undefined);
        expect(element.dataset.textureSize).toBe(undefined);
        
        element.dataset.texture = '/images/test-image.png';
        element.dataset.texturePixelated = 'true';

        IsometricCSS.processElement(element);

        style = getComputedStyle(element);
        
        expect(style).toHaveProperty('background-image', 'url(/images/test-image.png)');
        expect(style).toHaveProperty('background-size', 'cover');
        expect(style).toHaveProperty('image-rendering', 'crisp-edges');

        IsometricCSS.resetElement(element);

        expect(element.classList.length).toBe(0);
        expect(element.dataset.texture).toBe(undefined);
        expect(element.dataset.textureSize).toBe(undefined);    
        expect(element.dataset.texturePixelated).toBe(undefined);  

    });

});