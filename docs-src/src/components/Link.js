import React from 'react';

export const Link = (props) => {
    const { href, children } = props;
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer noopener"
        >
            { children }
        </a>
    );
};