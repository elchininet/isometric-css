import React, { useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";

const linksData = [
    {
        link: '/',
        label: 'Knowing the basics'
    },
    {
        link: '/browser',
        label: 'Library in the browser'
    },
    {
        link: '/node',
        label: 'Library in Node'
    },
    {
        link: '/demo',
        label: 'Example demo'
    }
];

export const MenuLinks = () => {

    const { pathname } = useLocation();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.scrollTo(0, 0);
        }
    }, [pathname]);

    return (
        <div className="menu-links">
            {
                linksData.map((item) => (
                    <Link
                        className={ pathname === item.link ? 'active' : '' }
                        key={ item.link }
                        to={ item.link }
                    >
                        { item.label }
                    </Link>
                ))
            }
        </div>
    );
};