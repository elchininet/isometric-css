import React from 'react';
import { GithubButton } from './GithubButton';

export const GithubPanel = () => {
    return (
        <div className="github-panel">
            <GithubButton type="github" />
            <GithubButton type="fork" />
            <GithubButton type="star" />
        </div> 
    );
};