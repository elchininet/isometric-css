import React, { Fragment } from 'react';
import { Prism } from 'react-syntax-highlighter';
import styleLight from 'react-syntax-highlighter/dist/esm/styles/prism/prism';
import styleDark from 'react-syntax-highlighter/dist/esm/styles/prism/vsc-dark-plus';
import { SectionTitle } from './SectionTitle';
import { Separtor } from './Separator';

export const Code = (props) => {

    const { language = 'javascript', separator = false, container = true, dark = false, noMargin = false, title } = props;
    let className = container ? 'container' : '';

    if (noMargin) {
        className += ' code-no-margin';
    }

    return (
        <Fragment>
            { title &&  <SectionTitle>{ title }</SectionTitle>}
            <div className={className}>
                <Prism
                    language={language}
                    style={dark ? styleDark : styleLight}
                >
                    { props.children }
                </Prism>
            </div>
            { separator &&  <Separtor />}
        </Fragment>
    );

};