import React from 'react';
import logo from '../images/isometric-css.png';

export const Header = () => {
    return (
        <header className="header">
            <img
                className="logo"
                alt="logo"
                src={logo}
            />
        </header>
    );
};