import React from 'react';
import frontTexture from '../../images/textures/houses-front.png';
import sideTexture from '../../images/textures/houses-side.png';
import topTexture from '../../images/textures/houses-top.png';
import roofTexture from '../../images/textures/houses-roof.png';
import { BalconyGroup } from './BalconyGroup';
import { BigBalcony } from './BigBalcony';

export const Houses = (props) => {
    const { right = 0, left = 0, top = 0 } = props;
    return (
        <div
            className="isometric"
            data-right={right}
            data-left={left}
            data-top={top}
        >
            <div
                className="isometric houses-top"
                data-view="top"
                data-texture={topTexture}
                data-texture-pixelated="true"
                data-top={139}
            />
            <div
                className="isometric houses-side"
                data-view="side"
                data-texture={sideTexture}
                data-texture-pixelated="true"
                data-left="150"
            />
            <div
                className="isometric houses-front dark"
                data-view="front"
                data-texture={frontTexture}
                data-texture-pixelated="true"
                data-right="361"
            />
            
            <div
                className="isometric houses-roof dark"
                data-view="top"
                data-texture={roofTexture}
                data-texture-pixelated="true"
                data-right="47"
                data-top="177"
                data-rotation-axis="left"
                data-rotation-value="45"
            />
            <div
                className="isometric houses-roof dark"
                data-view="top"
                data-texture={roofTexture}
                data-texture-pixelated="true"
                data-right="135"
                data-top="177"
                data-rotation-axis="left"
                data-rotation-value="45"
            />
            <div
                className="isometric houses-roof dark"
                data-view="top"
                data-texture={roofTexture}
                data-texture-pixelated="true"
                data-right="223"
                data-top="177"
                data-rotation-axis="left"
                data-rotation-value="45"
            />
            <div
                className="isometric houses-roof dark"
                data-view="top"
                data-texture={roofTexture}
                data-texture-pixelated="true"
                data-right="315"
                data-top="177"
                data-rotation-axis="left"
                data-rotation-value="45"
            />
            <BalconyGroup left={150} right={20} top={90} />
            <BalconyGroup left={150} right={109} top={90} />
            <BalconyGroup left={150} right={198} top={90} />
            <BalconyGroup left={150} right={288} top={90} />
            <BigBalcony right={361} left={51} top={45} />
        </div>
    );
};