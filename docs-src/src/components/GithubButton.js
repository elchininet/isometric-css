import React from 'react';
import { Link } from './Link';
import { ReactComponent as Github } from '../images/svg/github.svg';
import { ReactComponent as Fork } from '../images/svg/fork.svg';
import { ReactComponent as Star } from '../images/svg/star.svg';

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