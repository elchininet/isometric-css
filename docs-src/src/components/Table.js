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
    const { header = false, noPadding = false, noBorder = false, paddingBig = false, colSpan } = props;
    const Tag = header ? 'th' : 'td';
    const tagAttributes = {};
    if (colSpan) {
        tagAttributes.colSpan = colSpan;
    }
    if (noPadding || noBorder || paddingBig) {
        tagAttributes.className = '';
        if (noPadding) {
            tagAttributes.className += 'no-padding';
        }
        if (noBorder) {
            tagAttributes.className += ' no-border';
        }
        if (paddingBig) {
            tagAttributes.className += ' padding-big';
        }
    }
    return (
        <Tag {...tagAttributes}>
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