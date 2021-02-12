import React from 'react';
import floorImage from '../images/textures/gray_wool.png';
import blockSide from '../images/textures/grass_block_side.png';
import blockTop from '../images/textures/green_wool.png';

export const CodeDemo = () => {

    return (
        <div className="container">
            <div className="code-example-wrapper">
                <div className="code-example-world">
                    <div
                        className="isometric floor"
                        data-view="top"
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
                            data-view="top"
                            data-top="50"
                            data-texture={blockTop}
                            data-texture-pixelated="true"
                        />
                        <div
                            className="isometric plane"
                            data-view="front"
                            data-right="50"
                            data-texture={blockSide}
                            data-texture-pixelated="true"
                        />
                        <div
                            className="isometric plane"
                            data-view="side"
                            data-left="50"
                            data-texture={blockSide}
                            data-texture-pixelated="true"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};