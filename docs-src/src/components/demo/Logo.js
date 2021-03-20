import React from 'react';
import { Main } from './logo/Main';
import { Top } from './logo/Top';
import { Front } from './logo/Front';

export const Logo = (props) => {
    const { right, left, top } = props;
    return (
        <div
            className="isometric"
            data-right={right}
            data-left={left}
            data-top={top}
        >
            <Top />
            <Front />
            <Main />
        </div>
    );
};