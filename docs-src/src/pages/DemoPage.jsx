import React, { Fragment, useEffect } from 'react';
import { IsometricCSS } from 'isometric-css';
import { SectionTitle } from '../components/SectionTitle';
import { Demo } from '../components/Demo';

export const DemoPage = () => {

    useEffect(() => {
        if (typeof window !== 'undefined') {
            IsometricCSS.processDOM();
        }
    }, []);

    return (
        <Fragment>
            <SectionTitle level={1} separator>
                Live Demo
            </SectionTitle>
            <Demo />
        </Fragment>
    );
};