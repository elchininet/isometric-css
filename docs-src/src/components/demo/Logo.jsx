import React from 'react';
import { Main } from './logo/Main';
import { Top } from './logo/Top';
import { Front } from './logo/Front';

export const Logo = (props) => {
    const { right, left, top, animation } = props;

    const animationStr = animation
        ? Object.entries(animation).reduce((anim, entry) => {
            return `${anim} ${entry[0]}: ${entry[1]}`;
        }, '')
        : ''; 

    return (
        <div
            className="isometric"
            data-right={right}
            data-left={left}
            data-top={top}
            data-animation={animationStr}
            data-animation-duration="2000"
            data-animation-bounce="true"
            data-animation-easing="ease-in-out"
        >
            <Top />
            <Front />
            <Main />
        </div>
    );
};