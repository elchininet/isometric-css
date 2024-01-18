import React, { Fragment } from 'react';
import { Table, TableHeader, TableRow, TableColumn, TableBody } from './Table';

export const TableRotations = () => {
    return (
      <Fragment>
        <Table>
          <TableHeader>
            <TableRow>
              <TableColumn header>
                Initial plane view
              </TableColumn>
              <TableColumn header>
                Rotation
              </TableColumn>
              <TableColumn header>
                Final plane view
              </TableColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableColumn>
                front
              </TableColumn>
              <TableColumn>
                90º left
              </TableColumn>
              <TableColumn>
                top
              </TableColumn>
            </TableRow>
            <TableRow>
              <TableColumn>
                front
              </TableColumn>
              <TableColumn>
                -90º top
              </TableColumn>
              <TableColumn>
                side
              </TableColumn>
            </TableRow>
            <TableRow>
              <TableColumn>
                side
              </TableColumn>
              <TableColumn>
                -90 right
              </TableColumn>
              <TableColumn>
                top
              </TableColumn>
            </TableRow>
            <TableRow>
              <TableColumn>
                side
              </TableColumn>
              <TableColumn>
                90º top
              </TableColumn>
              <TableColumn>
                front
              </TableColumn>
            </TableRow>
            <TableRow>
              <TableColumn>
                top
              </TableColumn>
              <TableColumn>
                90º right
              </TableColumn>
              <TableColumn>
                side
              </TableColumn>
            </TableRow>
            <TableRow>
              <TableColumn>
                top
              </TableColumn>
              <TableColumn>
                  -90º left
              </TableColumn>
              <TableColumn>
                front
              </TableColumn>
            </TableRow>
          </TableBody>
        </Table>
      </Fragment>
    );
};