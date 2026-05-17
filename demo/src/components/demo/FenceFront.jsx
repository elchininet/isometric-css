import React from 'react';
import { FencePole } from './FencePole';
import { FenceFrontBars } from './FenceFrontBars';

export const FenceFront = (props) => {
    const { right, left, top } = props;
    return (
        <div
            className="isometric"
            data-right={right}
            data-left={left}
            data-top={top}
        >
            <FenceFrontBars left={-103} />
            <FencePole />
            <FenceFrontBars left={-208} />
            <FencePole left={-105} />
            <FencePole left={-210} />
        </div>
    );
};