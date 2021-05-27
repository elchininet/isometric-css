import { IsometricCSS } from '../src';
import { HSQRT3, VIEW, AXIS } from '../src/constants';
import { top, front, side } from './constants';

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

    it('setView', (): void => {

        // setView top
        IsometricCSS.setView(element, 'top');

        expect(element.classList.length).toBe(1);

        let style = getComputedStyle(element);

        expect(style).toHaveProperty('transform-origin', '50% 50%');
        expect(style).toHaveProperty('position', 'absolute');
        expect(style).toHaveProperty('transform', top);

        IsometricCSS.resetElement(element);

        expect(element.classList.length).toBe(0);

        style = getComputedStyle(element);

        expect(style).toHaveProperty('transform-origin', '');
        expect(style).toHaveProperty('position', '');
        expect(style).toHaveProperty('transform', '');

        // setView front
        IsometricCSS.setView(element, 'front');

        expect(element.classList.length).toBe(1);

        style = getComputedStyle(element);

        expect(style).toHaveProperty('transform-origin', '50% 50%');
        expect(style).toHaveProperty('position', 'absolute');
        expect(style).toHaveProperty('transform', front);

        IsometricCSS.resetElement(element);

        // setView front
        IsometricCSS.setView(element, 'side');

        expect(element.classList.length).toBe(1);

        style = getComputedStyle(element);

        expect(style).toHaveProperty('transform-origin', '50% 50%');
        expect(style).toHaveProperty('position', 'absolute');
        expect(style).toHaveProperty('transform', side);

        IsometricCSS.resetElement(element);

        IsometricCSS.setView(element, 'fake' as 'top');

        expect(element.classList.length).toBe(0);

        IsometricCSS.setView(element, 'top');
        IsometricCSS.setView(element, 'front');

        expect(element.classList.length).toBe(1);

        style = getComputedStyle(element);

        expect(style).toHaveProperty('transform', front);

    });

    it('setPosition', (): void => {
        
        IsometricCSS.setPosition(element, {
            right: 0,
            left: 0,
            top: 0
        });

        expect(element.classList.length).toBe(0);

        IsometricCSS.setPosition(element, {
            right: 100,
            left: 100,
            top: 100
        });

        let style = getComputedStyle(element);

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
            right: 100
        });

        IsometricCSS.setPosition(element, {
            top: 100
        });

        expect(element.classList.length).toBe(1);

        style = getComputedStyle(element);

        IsometricCSS.resetElement(element);

        IsometricCSS.setPosition(element, {
            right: 100,
            top: 100
        });

        const style2 = getComputedStyle(element);
        
        expect(style).toHaveProperty('left', `${HSQRT3 * 100}px`);
        expect(style).toHaveProperty('top', '-50px');
        expect(style2).toHaveProperty('left', `${HSQRT3 * 100}px`);
        expect(style2).toHaveProperty('top', '-50px');

    });

    it('setRotation', (): void => {

        IsometricCSS.setRotation(element, {
            axis: 'top',
            value: 45
        });

        const style = getComputedStyle(element);

        expect(element.classList.length).toBe(0);
        expect(style).toHaveProperty('transform', '');

        IsometricCSS.resetElement(element);

        const views = [VIEW.top, VIEW.front, VIEW.side];
        const axis = [AXIS.top, AXIS.left, AXIS.right];
        const angles = ['30', '60', '90'];

        const values = {
            top: {
                top: {
                    '30': 'translate(-50%, -50%) matrix(0.965926,-0.149429,0.258819,0.557677,0,0) scale(1.224745) translate(-50%, 50%)',
                    '60': 'translate(-50%, -50%) matrix(0.965926,0.149429,-0.258819,0.557677,0,0) scale(1.224745) translate(-50%, 50%)',
                    '90': 'translate(-50%, -50%) matrix(0.707107,0.408248,-0.707107,0.408248,0,0) scale(1.224745) translate(-50%, 50%)'
                },
                right: {
                    '30': 'translate(-50%, -50%) matrix(0.612372,0.054695,0.707107,0.408248,0,0) scale(1.224745) translate(-50%, 50%)',
                    '60': 'translate(-50%, -50%) matrix(0.353554,0.502983,0.707107,0.408248,0,0) scale(1.224745) translate(-50%, 50%)',
                    '90': 'translate(-50%, -50%) matrix(0,0.816497,0.707107,0.408248,0,0) scale(1.224745) translate(-50%, 50%)'
                },
                left: {
                    '30': 'translate(-50%, -50%) matrix(0.707107,-0.408248,0.612372,0.761802,0,0) scale(1.224745) translate(-50%, 50%)',
                    '60': 'translate(-50%, -50%) matrix(0.707107,-0.408248,0.353554,0.911231,0,0) scale(1.224745) translate(-50%, 50%)',
                    '90': 'translate(-50%, -50%) matrix(0.707107,-0.408248,0,0.816497,0,0) scale(1.224745) translate(-50%, 50%)'
                }
            },
            front: {
                top: {
                    '30': 'translate(-50%, -50%) matrix(0.965925,-0.149429,0,0.816496,0,0) scale(1.224745) translate(-50%, -50%)',
                    '60': 'translate(-50%, -50%) matrix(0.965926,0.149429,0,0.816496,0,0) scale(1.224745) translate(-50%, -50%)',
                    '90': 'translate(-50%, -50%) matrix(0.707107,0.408249,0,0.816496,0,0) scale(1.224745) translate(-50%, -50%)'
                },
                right: {
                    '30': 'translate(-50%, -50%) matrix(0.612372,0.054695,-0.353554,0.91123,0,0) scale(1.224745) translate(-50%, -50%)',
                    '60': 'translate(-50%, -50%) matrix(0.353553,0.502982,-0.612372,0.761801,0,0) scale(1.224745) translate(-50%, -50%)',
                    '90': 'translate(-50%, -50%) matrix(0,0.816496,-0.707107,0.408248,0,0) scale(1.224745) translate(-50%, -50%)'
                },
                left: {
                    '30': 'translate(-50%, -50%) matrix(0.707107,-0.408248,-0.353554,0.502982,0,0) scale(1.224745) translate(-50%, -50%)',
                    '60': 'translate(-50%, -50%) matrix(0.707107,-0.408248,-0.612372,0.054695,0,0) scale(1.224745) translate(-50%, -50%)',
                    '90': 'translate(-50%, -50%) matrix(0.707107,-0.408248,-0.707107,-0.408248,0,0) scale(1.224745) translate(-50%, -50%)'
                }
            },
            side: {
                top: {
                    '30': 'translate(-50%, -50%) matrix(0.258819,0.557677,0,0.816496,0,0) scale(1.224745) translate(50%, -50%)',
                    '60': 'translate(-50%, -50%) matrix(-0.258819,0.557678,0,0.816496,0,0) scale(1.224745) translate(50%, -50%)',
                    '90': 'translate(-50%, -50%) matrix(-0.707107,0.408249,0,0.816496,0,0) scale(1.224745) translate(50%, -50%)'
                },
                right: {
                    '30': 'translate(-50%, -50%) matrix(0.707107,0.408248,-0.353553,0.911231,0,0) scale(1.224745) translate(50%, -50%)',
                    '60': 'translate(-50%, -50%) matrix(0.707107,0.408248,-0.612372,0.761802,0,0) scale(1.224745) translate(50%, -50%)',
                    '90': 'translate(-50%, -50%) matrix(0.707107,0.408248,-0.707107,0.408249,0,0) scale(1.224745) translate(50%, -50%)'
                },
                left: {
                    '30': 'translate(-50%, -50%) matrix(0.612372,0.761801,-0.353553,0.502982,0,0) scale(1.224745) translate(50%, -50%)',
                    '60': 'translate(-50%, -50%) matrix(0.353554,0.91123,-0.612372,0.054695,0,0) scale(1.224745) translate(50%, -50%)',
                    '90': 'translate(-50%, -50%) matrix(0,0.816496,-0.707107,-0.408248,0,0) scale(1.224745) translate(50%, -50%)'
                }
            },
        };

        type Angle = '30' | '60' | '90';

        views.forEach((v) => {
            axis.forEach((ra) => {
                angles.forEach((rv) => {

                    IsometricCSS.setView(element, v);
                    IsometricCSS.setRotation(element, {
                        axis: ra,
                        value: +rv
                    });

                    const style = getComputedStyle(element);
                    
                    expect(element.classList.length).toBe(1);
                    expect(style).toHaveProperty('transform', values[v][ra][rv as Angle]);

                });
            });
        });

    });

    it('setTexture', (): void => {
        
        IsometricCSS.setTexture(element, {
            url: '/images/test-image.png'
        });

        expect(element.classList.length).toBe(1);

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
        expect(style).toHaveProperty('image-rendering', 'crisp-edges');

        IsometricCSS.resetElement(element);

        IsometricCSS.setTexture(element, {
            url: '/images/test-image.png'
        });

        IsometricCSS.setTexture(element, {
            url: '/images/test-image2.png',
            size: '100px 100px',
            pixelated: true
        });

        expect(element.classList.length).toBe(1);

        style = getComputedStyle(element);

        expect(style).toHaveProperty('background-image', 'url(/images/test-image2.png)');
        expect(style).toHaveProperty('background-size', '100px 100px');
        expect(style).toHaveProperty('image-rendering', 'crisp-edges');

    });

    it('setAnimation', (): void => {
        
        IsometricCSS.setAnimation(element, {
            position: {
                right: 50,
                left: 100
            }
        });

        expect(element.classList.length).toBe(1);

        let style = getComputedStyle(element);

        expect(style).toHaveProperty('animation-name', 'isometric-tbi0wv');
        expect(style).toHaveProperty('animation-duration', '1000ms');
        expect(style).toHaveProperty('animation-timing-function', 'linear');
        expect(style).toHaveProperty('animation-iteration-count', 'infinite');
        expect(style).toHaveProperty('animation-direction', 'normal');
        expect(style).toHaveProperty('animation-fill-mode', 'both');

        IsometricCSS.resetElement(element);

        expect(element.classList.length).toBe(0);

        IsometricCSS.setAnimation(element, {
            position: {
                right: 50,
                left: 100
            },
            duration: 5000,
            easing: 'ease-in-out',
            repeat: 10,
            bounce: true
        });

        style = getComputedStyle(element);

        expect(style).toHaveProperty('animation-name', 'isometric-tbi0wv');
        expect(style).toHaveProperty('animation-duration', '5000ms');
        expect(style).toHaveProperty('animation-timing-function', 'ease-in-out');
        expect(style).toHaveProperty('animation-iteration-count', '20');
        expect(style).toHaveProperty('animation-direction', 'alternate');

        IsometricCSS.resetElement(element);

        IsometricCSS.setAnimation(element, {
            position: {
                right: 50,
                left: 100
            }
        });

        IsometricCSS.setAnimation(element, {
            position: {
                right: 100,
                left: 100
            },
            bounce: true
        });

        style = getComputedStyle(element);

        expect(style).toHaveProperty('animation-direction', 'alternate');

        IsometricCSS.resetElement(element);
        
        IsometricCSS.setPosition(element, {
            right: 100
        });

        IsometricCSS.setAnimation(element, {
            position: {
                right: 100,
                left: 100
            }
        });

        style = getComputedStyle(element);

        expect(style).toHaveProperty('left', `${HSQRT3 * 100}px`);
        expect(style).toHaveProperty('top', '50px');

    });

    it('resetAnimation', (): void => {

        IsometricCSS.resetAnimation(element);

        expect(element.classList.length).toBe(0);

        IsometricCSS.setAnimation(element, {
            position: {
                right: 50,
                left: 100
            }
        });

        const classes = element.className;

        expect(element.classList.length).toBe(1);

        IsometricCSS.resetAnimation(element);

        expect(element.classList.length).toBe(1);
        expect(element.className).toBe(classes);

    });

    it('pauseAnimation and resumeAnimation', (): void => {

        IsometricCSS.setAnimation(element, {
            position: {
                right: 50,
                left: 100
            }
        });

        IsometricCSS.pauseAnimation(element);

        expect(element.dataset.animationRunning).toBe('false');
        
        IsometricCSS.resumeAnimation(element);

        expect(element.dataset.animationRunning).toBe('true');

        IsometricCSS.resetElement(element);

        IsometricCSS.pauseAnimation(element);

        expect(element.dataset.animationRunning).toBeUndefined();

        IsometricCSS.resumeAnimation(element);

        expect(element.dataset.animationRunning).toBeUndefined();

    }); 

});