import React, { Fragment } from 'react';
import { SectionTitle } from './SectionTitle';
import { Table, TableHeader, TableRow, TableColumn, TableBody } from './Table';
import { Code } from './Code';

export const DynamicTable = (props) => {

    const { title, header, rows } = props;

    return (
        <Fragment>
            <SectionTitle level={4}>
                { title }
            </SectionTitle>
            <Table>
                <TableHeader>
                    <TableRow>
                        {
                            header.map((th) => (
                                <TableColumn
                                    key={th}
                                    header
                                >
                                    { th }
                                </TableColumn>
                            ))
                        }
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        rows.map((row, rowIndex) => (
                            <Fragment key={rowIndex}>
                                <TableRow>
                                    {
                                        row.columns.map((td, columnIndex) => (
                                            <TableColumn key={`${rowIndex}-${columnIndex}`}>
                                                { td }
                                            </TableColumn>
                                        ))
                                    }
                                </TableRow>
                                <TableRow>
                                    <TableColumn
                                        colSpan={2}
                                        noPadding
                                    >
                                        <Code
                                            language="typescript"
                                            container={false}
                                            dark                                        
                                        >
                                            { row.code }        
                                        </Code>
                                    </TableColumn>
                                </TableRow>
                            </Fragment>
                        ))
                    }
                </TableBody>
            </Table>
            
        </Fragment>
    );
};