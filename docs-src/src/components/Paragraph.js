import React, { Fragment } from 'react';
import { SectionTitle } from './SectionTitle';
import { Separtor } from './Separator';

export const Paragraph = (props) => {
    const { separator = false, title, titleLevel, children } = props;
    return (
        <Fragment>
            { title &&  <SectionTitle level={titleLevel}>{ title }</SectionTitle>}
            <p className="paragraph container">
                { children }
            </p>
            { separator &&  <Separtor />}
        </Fragment>
    );

};