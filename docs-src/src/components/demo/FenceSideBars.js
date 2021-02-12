import React from 'react';

export const FenceSideBars = (props) => {
    const { right, left, top } = props;
    return (
        <div
            className="isometric"
            data-right={right}
            data-left={left}
            data-top={top}
        >
            <div
                className="isometric fence-side"
                data-view="top"
                data-top="2"
            />
            <div
                className="isometric fence-side"
                data-view="top"
                data-top="8"
            />
            <div
                className="isometric fence-side"
                data-view="top"
                data-top="14"
            />
            <div
                className="isometric fence-side"
                data-view="top"
                data-top="20"
            />            
        </div>
    );
};