import { IsometricCSS } from '../src';
import { PLANE, PLANE_CSS, HSQRT3 } from '../src/constants';

const base = 'isometric-prqriw';
const top = 'isometric-1lrvt5v';
const front = 'isometric-pna9ky';
const side = 'isometric-t1dg2y';
const ruleNameReg = /^\.(isometric-.+)$/;

describe('Test CSS Rules names and values', (): void => {

    it('Number of CSS Rules', (): void => {

        expect(document.styleSheets[0]).toBeDefined();
        expect(document.styleSheets[0].cssRules.length).toBe(4);

    });

    it('CSS Rules names and values', (): void => {

        for (let i = 0; i < 4; i++) {

            const rule = document.styleSheets[0].cssRules[i] as CSSStyleRule;
            const className = rule.selectorText.replace(ruleNameReg, '$1');

            expect(rule.selectorText).toMatch(ruleNameReg);
            expect([base, top, front, side]).toContain(className);

            switch (className) {

                case base:
                    expect(rule.style).toHaveProperty('position', 'absolute');
                    expect(rule.style).toHaveProperty('transform-origin', '0 0');
                    expect(rule.style).toHaveProperty('-ms-transform-origin', '0 0');
                    expect(rule.style).toHaveProperty('-webkit-transform-origin', '0 0');
                    break;
                case top:
                    expect(rule.style).toHaveProperty('transform', PLANE_CSS[PLANE.TOP]);
                    expect(rule.style).toHaveProperty('-webkit-transform', PLANE_CSS[PLANE.TOP]);
                    expect(rule.style).toHaveProperty('-ms-transform', PLANE_CSS[PLANE.TOP]);
                    break;
                case front:
                    expect(rule.style).toHaveProperty('transform', PLANE_CSS[PLANE.FRONT]);
                    expect(rule.style).toHaveProperty('-webkit-transform', PLANE_CSS[PLANE.FRONT]);
                    expect(rule.style).toHaveProperty('-ms-transform', PLANE_CSS[PLANE.FRONT]);
                    break;
                case side:
                    expect(rule.style).toHaveProperty('transform', PLANE_CSS[PLANE.SIDE]);
                    expect(rule.style).toHaveProperty('-webkit-transform', PLANE_CSS[PLANE.SIDE]);
                    expect(rule.style).toHaveProperty('-ms-transform', PLANE_CSS[PLANE.SIDE]);
                    break;                   

            }

        }

    });

});

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

    });

});