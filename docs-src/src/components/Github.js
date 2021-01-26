import React from 'react';
import GitHubButton from 'react-github-btn';

export const Github = () => {
    return (
        <div className="github">
            <GitHubButton
                href="https://github.com/elchininet/isometric-css/archive/master.zip"
                data-size="large"
                data-icon="octicon-cloud-download"
                aria-label="Download isometric-css on GitHub"
                data-color-scheme="no-preference: light; light: light; dark: light;"
            >
                Download
            </GitHubButton>
            <GitHubButton
                href="https://github.com/elchininet/isometric-css/fork"
                data-size="large"
                data-icon="octicon-repo-forked"
                aria-label="Fork isometric-css on GitHub"
                data-color-scheme="no-preference: light; light: light; dark: light;"
            >
                Fork
            </GitHubButton>
            <GitHubButton
                href="https://github.com/elchininet/isometric-css"
                data-size="large"
                data-icon="octicon-star"
                aria-label="isometric-css on GitHub"
                data-color-scheme="no-preference: light; light: light; dark: light;"
            >
                Star
            </GitHubButton>
            </div> 
    );
};