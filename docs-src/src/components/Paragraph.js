import React, { Fragment } from 'react';
import { SectionTitle } from './SectionTitle';
import { Separtor } from './Separator';

export const Paragraph = (props) => {
    const { separator = false, title, children } = props;
    return (
        <Fragment>
            { title &&  <SectionTitle>{ title }</SectionTitle>}
            <p className="paragraph container">
                { children }
            </p>
            { separator &&  <Separtor />}
        </Fragment>
    );

};