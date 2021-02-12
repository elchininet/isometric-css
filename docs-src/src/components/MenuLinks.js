import React, { Fragment, useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import { Chevron } from './Chevron';

const linksData = [
    {
        link: '/',
        label: 'Live Demo'
    },
    {
        link: '/knowing-the-basics',
        label: 'Knowing the basics'
    },
    {
        link: '/using-the-library',
        label: 'Using the library'
    },
    {
        link: '/library-api',
        label: 'Library API'
    },
    {
        link: '/code-example',
        label: 'Code example'
    }    
];

export const MenuLinks = () => {

    const { pathname } = useLocation();

    const [ menuOpen, setMenuOpen ] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.scrollTo(0, 0);
        }
    }, [pathname]);

    const onClickChevron = () => {
        setMenuOpen(!menuOpen);
    };

    const onClickLink = () => {
        setMenuOpen(false);
    };

    return (
        <Fragment>
            <Chevron
                open={menuOpen}
                onClick={onClickChevron}
            />
            <div
                className="menu-links"
                data-open={menuOpen}
            >
                {
                    linksData.map((item) => (
                        <Link
                            className={ pathname === item.link ? 'active' : '' }
                            key={ item.link }
                            to={ item.link }
                            onClick={onClickLink}
                        >
                            { item.label }
                        </Link>
                    ))
                }
            </div>
        </Fragment>
    );
};