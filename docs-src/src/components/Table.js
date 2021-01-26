import React from 'react';

export const Table = (props) => {
    return (
        <div className="container">
            <table className="table" width="100%">
                { props.children }
            </table>
        </div>        
    );
};

export const TableHeader = (props) => {
    return (
        <thead>
            { props.children }
        </thead>
    );
};

export const TableRow = (props) => {
    return (
        <tr>
            { props.children }
        </tr>
    );
};

export const TableColumn = (props) => {
    const { header = false } = props;
    const Tag = header ? 'th' : 'td';
    return (
        <Tag>
            { props.children }
        </Tag>
    );
};

export const TableBody = (props) => {
    return (
        <tbody>
            { props.children }
        </tbody>
    );
};