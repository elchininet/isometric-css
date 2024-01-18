import React from 'react';

export const Chevron = (props) => {

    const { open, onClick } = props;

    return (
        <button
            className="chevron"
            data-open={open}
            onClick={onClick}
        >
            <div></div>
        </button>
    );

};