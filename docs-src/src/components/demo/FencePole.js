import React from 'react';

export const FencePole = (props) => {
    const { right, left, top } = props;
    return (
        <div
            className="isometric"
            data-right={right}
            data-left={left}
            data-top={top}
        >
            <div
                className="isometric fence-pole-side"
                data-view="side"
                data-left="2"
            />
            <div
                className="isometric fence-pole-side dark"
                data-view="front"
                data-right="2"
            />
            <div
                className="isometric fence-pole-top"
                data-view="top"
                data-top="26"
            />            
        </div>
    );
};