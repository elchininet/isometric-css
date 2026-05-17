import React, { Fragment } from 'react';
import { SectionTitle } from './SectionTitle';

export const Graphic = (props) => {
    const { children, title } = props;
    return (
        <Fragment>
            { title &&  <SectionTitle>{ title }</SectionTitle>}
            <div role="presentation" className="container graphic">
                { children }
            </div>
        </Fragment>
    );

};