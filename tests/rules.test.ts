import '../src';
import { PLANE, PLANE_CSS } from '../src/constants';
import { base, top, front, side, ruleNameReg } from './constants';

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