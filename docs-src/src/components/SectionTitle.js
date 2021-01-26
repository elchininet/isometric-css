import React, { Fragment } from 'react';
import { Separtor } from './Separator';

export const SectionTitle = (props) => {
    const { level = 2, separator, children } = props;
    const Tag = `h${level}`;
    return (
        <Fragment>
            <Tag className="container">
                { children }
            </Tag>
            { separator && <Separtor /> }
        </Fragment>       
    );
};