import React, { Fragment } from 'react';
import { SectionTitle } from './SectionTitle';
import { Table, TableHeader, TableRow, TableColumn, TableBody } from './Table';

export const BrowserApiMethods = () => {
    return (
        <Fragment>
            <SectionTitle level={4}>
                Module methods
            </SectionTitle>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableColumn header>
                            Method
                        </TableColumn>
                        <TableColumn header>
                            Description
                        </TableColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableColumn>
                            getPosition
                        </TableColumn>
                        <TableColumn>
                            Return the style declarations to move the plane to the right position
                        </TableColumn>
                    </TableRow>
                    <TableRow>
                        <TableColumn>
                            getBackground
                        </TableColumn>
                        <TableColumn>
                            Return the style declarations with the background properties of a plane
                        </TableColumn>
                    </TableRow>
                    <TableRow>
                        <TableColumn>
                            createStyleSheet
                        </TableColumn>
                        <TableColumn>
                            Giving an object of isometric positions, returns an object with class names and automatically attach the specific rules to the header of the page
                        </TableColumn>
                    </TableRow>
                    <TableRow>
                        <TableColumn>
                            processDOM
                        </TableColumn>
                        <TableColumn>
                            Process all the elements on the DOM with the isometric class name
                        </TableColumn>
                    </TableRow>
                </TableBody>
            </Table>
        </Fragment>
    );
};