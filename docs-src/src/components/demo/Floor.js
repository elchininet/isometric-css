import React from 'react';
import sideTexture from '../../images/textures/floor-side.png';
import topTexture from '../../images/textures/floor-top.png';

export const Floor = (props) => {
    const { right, left, top } = props;
    return (
        <div
            className="isometric"
            data-right={right}
            data-left={left}
            data-top={top}
        >
            <div
                className="isometric floor-top"
                data-view="top"
                data-texture={topTexture}
                data-texture-pixelated="true"
            />
            <div
                className="isometric floor-side dark"
                data-view="side"
                data-texture={sideTexture}
                data-texture-pixelated="true"
                data-left="230"
                data-top="-10"
            />
            <div
                className="isometric floor-front darker"
                data-view="front"
                data-right="450"
                data-top="-10"
            />
        </div>
    );
};