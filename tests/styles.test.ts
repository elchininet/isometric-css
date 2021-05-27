import { IsometricCSS } from '../src';
import { IsometricPosition, Rotation, Texture, Animation } from '../src/@types';
import { HSQRT3 } from '../src/constants';
import { top } from './constants';

describe('Test stylesheet', (): void => {

    let elementA: HTMLDivElement;
    let elementB: HTMLDivElement;

    beforeEach((): void => {

        elementA = document.createElement('div');
        elementB = document.createElement('div');
        document.body.appendChild(elementA);
        document.body.appendChild(elementB);

    });

    afterEach((): void => {
        if (elementA.parentNode && elementA.parentNode === document.body) {
            document.body.removeChild(elementA);
        }
        if (elementB.parentNode && elementB.parentNode === document.body) {
            document.body.removeChild(elementB);
        }        
    });

    it('Stylesheet and Rules reuse', (): void => {

        const styleElement = document.querySelector('[data-isometric]');

        expect(styleElement).toBeNull();

        elementA.dataset.view = 'top';
        elementA.dataset.right = '100';
        elementA.dataset.top = '100';

        elementB.dataset.view = 'top';
        elementB.dataset.right = '100';
        elementB.dataset.top = '100';

        IsometricCSS.processElement(elementA);

        const styleA = getComputedStyle(elementA);

        expect(styleA).toHaveProperty('transform', top);
        expect(styleA).toHaveProperty('left', `${HSQRT3 * 100}px`);
        expect(styleA).toHaveProperty('top', '-50px');

        const styleElements = document.querySelectorAll<HTMLStyleElement>('[data-isometric]');

        expect(styleElements.length).toBe(1);
        expect(styleElements[0].sheet).toBeInstanceOf(CSSStyleSheet);

        const sheet = styleElements[0].sheet;

        expect(sheet.cssRules.length).toBe(1);

        const rule = sheet.cssRules[0] as CSSStyleRule;

        expect(rule.style).toHaveProperty('transform', top);
        expect(rule.style).toHaveProperty('left', `${HSQRT3 * 100}px`);
        expect(rule.style).toHaveProperty('top', '-50px');

        expect('.' + elementA.classList[0]).toBe(rule.selectorText);

        IsometricCSS.processElement(elementB);

        expect(sheet.cssRules.length).toBe(1);
        expect(elementA.classList[0]).toBe(elementB.classList[0]);
        
        IsometricCSS.setRotation(elementB, {
            axis: 'top',
            value: 45
        });

        expect(sheet.cssRules.length).toBe(2);
        expect(elementA.classList[0]).not.toBe(elementB.classList[0]);

        IsometricCSS.resetElement(elementA);

        expect(sheet.cssRules.length).toBe(1);

        IsometricCSS.resetElement(elementB);

        expect(sheet.cssRules.length).toBe(0);

    });

    it('Not allowed', (): void => {

        IsometricCSS.resetElement(elementA);
        IsometricCSS.setView(elementA, 'fake' as 'top');
        IsometricCSS.setPosition(elementA, {
            right: 'a',
            left: 'b',
            top: 'c'
        } as unknown as IsometricPosition);
        IsometricCSS.setPosition(elementA, {
            right: NaN,
            fake: 100,
        } as unknown as IsometricPosition);
        IsometricCSS.setRotation(elementA, {
            axis: 'fake' as 'top',
            value: 'abc'
        } as unknown as Rotation);
        IsometricCSS.setRotation(elementA, {
            axis: 'top',
            value: NaN
        } as unknown as Rotation);
        IsometricCSS.setTexture(elementA, {
            size: 100
        } as unknown as Texture);
        IsometricCSS.setTexture(elementA, {
            url: 'fakedomain/fakeimage.png',
            size: 6
        } as unknown as Texture);
        IsometricCSS.setTexture(elementA, {
            url: 'fakedomain/fakeimage.png',
            size: 'cover',
            pixelated: 'none'
        } as unknown as Texture);
        IsometricCSS.setAnimation(elementA, 5 as unknown as Animation);
        IsometricCSS.setAnimation(elementA, {
            position: {
                right: 20,
                left: 100
            },
            repeat: true
        } as unknown as Animation);
        IsometricCSS.setAnimation(elementA, {
            position: {
                right: 20,
                left: 100
            },
            bounce: 5
        } as unknown as Animation);
        IsometricCSS.setAnimation(elementA, {
            position: {
                right: 20,
                left: 100
            },
            duration: 'all'
        } as unknown as Animation);

        expect(elementA.classList.length).toBe(0);

        const styleElement = document.querySelector<HTMLStyleElement>('[data-isometric]');

        expect(styleElement).not.toBeNull();

        const sheet = styleElement.sheet;

        expect(sheet.cssRules.length).toBe(0);

    });

});