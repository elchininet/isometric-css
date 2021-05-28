import React from 'react';
import floorImage from '../images/textures/gray_wool.png';
import blockSide from '../images/textures/grass_block_side.png';
import blockTop from '../images/textures/green_wool.png';

export const CodeDemo = (props) => {

    const { moved, rotated, doubleRotated, animation } = props;
    const attrs = {
        className: 'isometric'
    };
    if (moved) {
        attrs['data-right'] = '75';
        attrs['data-left'] = '75';
    }
    if (rotated) {
        attrs['data-rotation-axis'] = 'top';
        attrs['data-rotation-value'] = '30';
    }

    if (animation) {
        attrs['data-animation'] = 'right: 180 left: 10';
        attrs['data-animation-repeat'] = '0';
        attrs['data-animation-easing'] = 'ease-in-out';
        attrs['data-animation-bounce'] = 'true';
    }

    const Wrapper = doubleRotated ? 'div' : React.Fragment;

    const attrsWrapper = doubleRotated
        ? {
            'className': 'isometric',
            'data-rotation-axis': 'right',
            'data-rotation-value': '30'
        }
        : {};

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
                    <div {...attrs}>
                        <Wrapper {...attrsWrapper}>
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
                        </Wrapper>
                    </div>
                </div>
            </div>
        </div>
    );
};