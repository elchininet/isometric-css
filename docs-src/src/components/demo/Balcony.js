import React from 'react';
import sideTexture from '../../images/textures/balcony-side.png';
import frontTexture from '../../images/textures/balcony-front.png';

export const Balcony = (props) => {
    const { right, left, top } = props;
    return (
        <div
            className="isometric"
            data-right={right}
            data-left={left}
            data-top={top}
        >
            <div
                className="isometric balcony-front darker"
                data-view="front"
                data-texture={frontTexture}
                data-texture-pixelated="true"
            />
            <div
                className="isometric balcony-front dark"
                data-view="front"
                data-right="17"
                data-texture={frontTexture}
                data-texture-pixelated="true"
            />
            <div
                className="isometric balcony-side"
                data-view="side"
                data-left="5"
                data-texture={sideTexture}
                data-texture-pixelated="true"
            />
        </div>
    );
};