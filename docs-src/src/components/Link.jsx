import React from 'react';

export const Link = (props) => {
    const { href, children, className = '', ...rest } = props;
    return (
        <a
            className={className}
            href={href}
            target="_blank"
            rel="noreferrer noopener"
            { ...rest }
        >
            { children }
        </a>
    );
};