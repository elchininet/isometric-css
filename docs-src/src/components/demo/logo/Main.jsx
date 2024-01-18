import React, { Fragment } from 'react';
import sideTexture from '../../../images/textures/logo/front.png';
import topTexture from '../../../images/textures/logo/top.png';

export const Main = () => {
    return (
        <Fragment>
            <div
                className="isometric logo-front"
                data-view="side"
                data-left="6"
                data-texture={sideTexture}
                data-texture-pixelated="true"
            />
            <div
                className="isometric logo-top"
                data-view="top"
                data-top="30"
                data-texture={topTexture}
                data-texture-pixelated="true"
            />
            <div
                className="isometric logo-letter-r-top-middle"
                data-view="top"
                data-right="164"
                data-top="12"
            />
        </Fragment>
    );
};