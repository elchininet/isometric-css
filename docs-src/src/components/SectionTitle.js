import React, { Fragment } from 'react';
import { Separtor } from './Separator';

export const SectionTitle = (props) => {
    const { level = 2, separator, children } = props;
    const Tag = `h${level}`;
    const classNames = `container${ level === 1 ? ' h1' : '' }`;
    return (
        <Fragment>
            <Tag className={classNames}>
                { children }
            </Tag>
            { separator && <Separtor /> }
        </Fragment>       
    );
};