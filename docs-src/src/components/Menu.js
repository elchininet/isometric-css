import React from 'react';
import { Link } from "react-router-dom";
import { Github } from './Github';
import { MenuLinks } from './MenuLinks';
import logo from '../images/isometric-css.png';

export const Menu = () => {
    return (
        <nav className="menu">
            <Link to="/">
                <img
                    className="logo"
                    alt="logo"
                    src={logo}
                />
            </Link>
            <Github />
            <MenuLinks />         
        </nav>
    );
};