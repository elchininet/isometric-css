import React from 'react';
import { Link } from './Link';
import Github from '../images/svg/github.svg?react';
import Fork from '../images/svg/fork.svg?react';
import Star from '../images/svg/star.svg?react';

const BUTTONS = {
    github: {
        component: <Github />,
        label: 'Download',
        url: 'https://github.com/elchininet/isometric-css/archive/master.zip'
    },
    fork: {
        component: <Fork />,
        label: 'Fork',
        url: 'https://github.com/elchininet/isometric-css/fork'
    },
    star: {
        component: <Star />,
        label: 'Star',
        url: 'https://github.com/elchininet/isometric-css'
    }
};

export const GithubButton = (props) => {

    const { type } = props;

    return (
        <Link
            className="github-button"
            href={ BUTTONS[type].url }
        >
            { BUTTONS[type].component }           
            <span>{ BUTTONS[type].label }</span>            
        </Link>
    );

};