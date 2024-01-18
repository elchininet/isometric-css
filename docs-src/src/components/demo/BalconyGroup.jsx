import React from 'react';
import { Balcony } from './Balcony';

export const BalconyGroup = (props) => {
    const { right, left, top } = props;
    return (
        <div
            className="isometric"
            data-right={right}
            data-left={left}
            data-top={top}
        >
            <Balcony />
            <Balcony right={37} />
            <Balcony top={-45} />
            <Balcony top={-45} right={37} />
        </div>
    );
};