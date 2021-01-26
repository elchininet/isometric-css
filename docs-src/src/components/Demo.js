import React from 'react';
import 'isometric-css/browser';
import floorImage from '../images/gray_wool.png';
import blockSide from '../images/grass_block_side.png';
import blockTop from '../images/green_wool.png';

export const Demo = () => {
    return (
        <div className="container res-height">
            <div className="world">
                <div
                    className="isometric floor"
                    data-plane="top"
                    data-texture={floorImage}
                    data-texture-size="50px 50px"
                    data-texture-pixelated="true"
                />
                <div
                    className="isometric"
                    data-right="75"
                    data-left="75"
                >
                    <div
                        className="isometric plane"
                        data-plane="top"
                        data-top="50"
                        data-texture={blockTop}
                        data-texture-size="cover"
                        data-texture-pixelated="true"
                    />
                    <div
                        className="isometric plane"
                        data-plane="front"
                        data-right="50"
                        data-texture={blockSide}
                        data-texture-size="cover"
                        data-texture-pixelated="true"
                    />
                    <div
                        className="isometric plane"
                        data-plane="side"
                        data-left="50"
                        data-texture={blockSide}
                        data-texture-size="cover"
                        data-texture-pixelated="true"
                    />
                </div>
            </div>
        </div>
    );
};