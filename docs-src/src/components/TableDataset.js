import React, { Fragment } from 'react';
import { Table, TableHeader, TableRow, TableColumn, TableBody } from './Table';

export const TableDataset = () => {
    return (
      <Fragment>
        <Table>
          <TableHeader>
            <TableRow>
              <TableColumn header>
                Data attribute
              </TableColumn>
              <TableColumn header>
                Posible values
              </TableColumn>
              <TableColumn header>
                Description
              </TableColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableColumn>
                data-plane
              </TableColumn>
              <TableColumn>
                top | front | side
              </TableColumn>
              <TableColumn>
                Defines the plane view
              </TableColumn>
            </TableRow>
            <TableRow>
              <TableColumn>
                data-right
              </TableColumn>
              <TableColumn>
                number
              </TableColumn>
              <TableColumn>
                Position in the right axis
              </TableColumn>
            </TableRow>
            <TableRow>
              <TableColumn>
                data-left
              </TableColumn>
              <TableColumn>
                number
              </TableColumn>
              <TableColumn>
                Position in the left axis
              </TableColumn>
            </TableRow>
            <TableRow>
              <TableColumn>
                data-top
              </TableColumn>
              <TableColumn>
                number
              </TableColumn>
              <TableColumn>
                Position in the top axis
              </TableColumn>
            </TableRow>
            <TableRow>
              <TableColumn>
                data-texture
              </TableColumn>
              <TableColumn>
                string
              </TableColumn>
              <TableColumn>
                Image url that will be used as the plane texture
              </TableColumn>
            </TableRow>
            <TableRow>
              <TableColumn>
                data-texture-size
              </TableColumn>
              <TableColumn>
                  cover | number% number%
              </TableColumn>
              <TableColumn>
                Size of the texture
              </TableColumn>
            </TableRow>
            <TableRow>
              <TableColumn>
                data-texture-pixelated
              </TableColumn>
              <TableColumn>
                  true | false
              </TableColumn>
              <TableColumn>
                  Sets if the texture should be pixelated or not
              </TableColumn>
            </TableRow>
          </TableBody>
        </Table>
      </Fragment>
    );
};