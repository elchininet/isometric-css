import '../src';
import { HSQRT3, NAMESPACE, AXIS } from '../src/constants';

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

    it('Element is set at DOM loaded', (): void => {

        element.classList.add(NAMESPACE);
        element.dataset.view = 'top';
        element.dataset.right = '100';
        element.dataset.top = '100';
        element.dataset.texture = '/images/test-image.png';
        element.dataset.textureSize = '50px 50px';
        element.dataset.texturePixelated = 'true';
        element.dataset.animation = 'right: 50, left: 100';
        element.dataset.animationDuration = '5000';
        element.dataset.animationEasing = 'ease-in-out';
        element.dataset.animationRepeat = '10';
        element.dataset.animationBounce = 'true';

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
        expect(style).toHaveProperty('animation-name', 'isometric-1hprtht');
        expect(style).toHaveProperty('animation-duration', '5000ms');
        expect(style).toHaveProperty('animation-timing-function', 'ease-in-out');
        expect(style).toHaveProperty('animation-iteration-count', '20');
        expect(style).toHaveProperty('animation-direction', 'alternate');
        expect(window).toHaveProperty('IsometricCSS');
        expect(window.IsometricCSS).toHaveProperty('processDOM');
        expect(window.IsometricCSS).toHaveProperty('processElement');
        expect(window.IsometricCSS).toHaveProperty('resetElement');
        expect(window.IsometricCSS).toHaveProperty('setView');
        expect(window.IsometricCSS).toHaveProperty('setPosition');
        expect(window.IsometricCSS).toHaveProperty('setTexture');

    });

    const createTop = () => {
        const top = document.createElement('div');
        top.classList.add(NAMESPACE);
        top.dataset.view = 'top';
        top.dataset.top = '100';
        return top;
    };

    const createFront = () => {
        const front = document.createElement('div');
        front.classList.add(NAMESPACE);
        front.dataset.view = 'front';
        front.dataset.right = '100';
        return front;
    };

    const createSide = () => {
        const side = document.createElement('div');
        side.classList.add(NAMESPACE);
        side.dataset.view = 'side';
        side.dataset.left = '100';
        return side;
    };

    const axis = [AXIS.top, AXIS.left, AXIS.right];
    const values = {
        [AXIS.top]: {
            top: 'translate(-50%, -50%) matrix(0.965926,-0.149429,0.258819,0.557677,0,0) scale(1.224745) translate(-50%, 50%)',
            front: 'translate(-50%, -50%) matrix(0.965925,-0.149429,0,0.816496,0,0) scale(1.224745) translate(-50%, -50%)',
            side: 'translate(-50%, -50%) matrix(0.258819,0.557677,0,0.816496,0,0) scale(1.224745) translate(50%, -50%)'
        },
        [AXIS.left]: {
            top: 'translate(-50%, -50%) matrix(0.707107,-0.408248,0.612372,0.761802,0,0) scale(1.224745) translate(-50%, 50%)',
            front: 'translate(-50%, -50%) matrix(0.707107,-0.408248,-0.353554,0.502982,0,0) scale(1.224745) translate(-50%, -50%)',
            side: 'translate(-50%, -50%) matrix(0.612372,0.761801,-0.353553,0.502982,0,0) scale(1.224745) translate(50%, -50%)'
        },
        [AXIS.right]: {
            top: 'translate(-50%, -50%) matrix(0.612372,0.054695,0.707107,0.408248,0,0) scale(1.224745) translate(-50%, 50%)',
            front: 'translate(-50%, -50%) matrix(0.612372,0.054695,-0.353554,0.91123,0,0) scale(1.224745) translate(-50%, -50%)',
            side: 'translate(-50%, -50%) matrix(0.707107,0.408248,-0.353553,0.911231,0,0) scale(1.224745) translate(50%, -50%)'
        }
    };

    axis.forEach((a) => {

        it(`Group rotated in axis ${a}`, (): void => {

            element.classList.add(NAMESPACE);
            element.dataset.rotationAxis = a;
            element.dataset.rotationValue = '30';

            const top = createTop();
            const front = createFront();
            const side = createSide();

            element.appendChild(top);
            element.appendChild(front);
            element.appendChild(side);
    
            window.document.dispatchEvent(new Event('DOMContentLoaded', {
                bubbles: true,
                cancelable: true
            }));
    
            const topStyle = getComputedStyle(top);
            const frontStyle = getComputedStyle(front);
            const sideStyle = getComputedStyle(side);

            expect(topStyle).toHaveProperty('transform', values[a].top);
            expect(frontStyle).toHaveProperty('transform', values[a].front);
            expect(sideStyle).toHaveProperty('transform', values[a].side);
    
        });

    });

    it('Do not rotate group if it doesn not have a rotationValue', (): void => {

        const group1 = document.createElement('div');
        const group2 = document.createElement('div');

        const top1 = createTop();
        const front1 = createFront();
        const side1 = createSide();

        const top2 = createTop();
        const front2 = createFront();
        const side2 = createSide();

        group1.appendChild(top1);
        group1.appendChild(front1);
        group1.appendChild(side1);        

        group2.appendChild(top2);
        group2.appendChild(front2);
        group2.appendChild(side2);

        element.appendChild(group1);
        element.appendChild(group2);
        
        group2.classList.add(NAMESPACE);
        group2.dataset.rotationAxis = 'top';

        window.document.dispatchEvent(new Event('DOMContentLoaded', {
            bubbles: true,
            cancelable: true
        }));

        const topStyle1 = getComputedStyle(top1);
        const frontStyle1 = getComputedStyle(front1);
        const sideStyle1 = getComputedStyle(side1);

        const topStyle2 = getComputedStyle(top2);
        const frontStyle2 = getComputedStyle(front2);
        const sideStyle2 = getComputedStyle(side2);

        expect(topStyle1.transform).toBe(topStyle2.transform);
        expect(frontStyle1.transform).toBe(frontStyle2.transform);
        expect(sideStyle1.transform).toBe(sideStyle2.transform);

    });

    it('Group with wrong rotation', (): void => {

        const group1 = document.createElement('div');
        const group2 = document.createElement('div');

        const top1 = createTop();
        const front1 = createFront();
        const side1 = createSide();

        const top2 = createTop();
        const front2 = createFront();
        const side2 = createSide();

        group1.appendChild(top1);
        group1.appendChild(front1);
        group1.appendChild(side1);        

        group2.appendChild(top2);
        group2.appendChild(front2);
        group2.appendChild(side2);

        element.appendChild(group1);
        element.appendChild(group2);
        
        group2.classList.add(NAMESPACE);
        group2.dataset.rotationAxis = 'fake';
        group2.dataset.rotationValue = '30';

        window.document.dispatchEvent(new Event('DOMContentLoaded', {
            bubbles: true,
            cancelable: true
        }));

        const topStyle1 = getComputedStyle(top1);
        const frontStyle1 = getComputedStyle(front1);
        const sideStyle1 = getComputedStyle(side1);

        const topStyle2 = getComputedStyle(top2);
        const frontStyle2 = getComputedStyle(front2);
        const sideStyle2 = getComputedStyle(side2);

        expect(topStyle1.transform).toBe(topStyle2.transform);
        expect(frontStyle1.transform).toBe(frontStyle2.transform);
        expect(sideStyle1.transform).toBe(sideStyle2.transform);

    });

    it('Default values', (): void => {

        element.classList.add(NAMESPACE);
        element.dataset.animation = 'right: 50, left: 100';

        window.document.dispatchEvent(new Event('DOMContentLoaded', {
            bubbles: true,
            cancelable: true
        }));

        expect(element.classList.length).toBe(2);

        const style = getComputedStyle(element);

        expect(style).toHaveProperty('animation-duration', '1000ms');
        expect(style).toHaveProperty('animation-timing-function', 'linear');
        expect(style).toHaveProperty('animation-iteration-count', 'infinite');
        expect(style).toHaveProperty('animation-direction', 'normal');

    });

    it('Keep iteration without bounce', (): void => {

        element.classList.add(NAMESPACE);
        element.dataset.animation = 'right: 50, left: 100';
        element.dataset.animationRepeat = '10';

        window.document.dispatchEvent(new Event('DOMContentLoaded', {
            bubbles: true,
            cancelable: true
        }));

        expect(element.classList.length).toBe(2);

        const style = getComputedStyle(element);

        expect(style).toHaveProperty('animation-iteration-count', '10');
        expect(style).toHaveProperty('animation-direction', 'normal');

    });

    it('Do not set the animation if the animation format is wrong', (): void => {

        element.classList.add(NAMESPACE);
        element.dataset.animation = 'rights: 50, left: 100.';

        window.document.dispatchEvent(new Event('DOMContentLoaded', {
            bubbles: true,
            cancelable: true
        }));

        expect(element.classList.length).toBe(1);

    });

});