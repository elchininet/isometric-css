import React, { Fragment } from 'react';
import topMiddleTexture from '../../../images/textures/logo/top-middle.png';
import topBottomTexture from '../../../images/textures/logo/top-bottom.png';

export const Top = () => {
    return (
        <Fragment>
            <div
                className="isometric logo-top-bottom"
                data-view="top"
                data-right="12"
                data-top="6"
                data-texture={topBottomTexture}
                data-texture-pixelated="true"
            />
            <div
                className="isometric logo-top-middle"
                data-view="top"
                data-right="18"
                data-top="18"
                data-texture={topMiddleTexture}
                data-texture-pixelated="true"
            />
        </Fragment>
    );
};