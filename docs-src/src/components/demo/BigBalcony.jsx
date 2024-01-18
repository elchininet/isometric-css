import React from 'react';
import side from '../../images/textures/big-balcony-side.png';
import front from '../../images/textures/big-balcony-front.png';

export const BigBalcony = (props) => {
    const { right, left, top } = props;
    return (
        <div
            className="isometric"
            data-right={right}
            data-left={left}
            data-top={top}
        >
            <div
                className="isometric big-balcony-bottom"
                data-view="top"
            />
            <div
                className="isometric big-balcony-side darker"
                data-view="side"
                data-texture={side}
                data-texture-pixelated="true"
            />
            <div
                className="isometric big-balcony-side"
                data-view="side"
                data-texture={side}
                data-texture-pixelated="true"
                data-left="47"
            />
            <div
                className="isometric big-balcony-front dark"
                data-view="front"
                data-texture={front}
                data-texture-pixelated="true"
                data-right="8"
            />            
        </div>
    );
};