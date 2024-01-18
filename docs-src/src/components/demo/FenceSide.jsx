import React from 'react';
import { FencePole } from './FencePole';
import { FenceSideBars } from './FenceSideBars';

export const FenceSide = (props) => {
    const { right, left, top } = props;
    return (
        <div
            className="isometric"
            data-right={right}
            data-left={left}
            data-top={top}
        >
            <FencePole />
            <FenceSideBars right={2} />
            <FencePole right={85} />
            <FenceSideBars right={87} />
            <FencePole right={170} />
            
            <FencePole right={255} />
            <FenceSideBars right={257} />
            <FencePole right={340} />
            <FenceSideBars right={342} />
        </div>
    );
};