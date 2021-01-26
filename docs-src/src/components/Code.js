import React, { Fragment } from 'react';
import { Prism } from 'react-syntax-highlighter';
import style from 'react-syntax-highlighter/dist/esm/styles/prism/prism'; 
import { SectionTitle } from './SectionTitle';
import { Separtor } from './Separator';

export const Code = (props) => {

    const { language = 'javascript', separator = false, title } = props;

    return (
        <Fragment>
            { title &&  <SectionTitle>{ title }</SectionTitle>}
            <div className="container">
                <Prism
                    language={language}
                    style={style}
                >
                    { props.children }
                </Prism>
            </div>
            { separator &&  <Separtor />}
        </Fragment>
    );

};