import React, { Fragment } from 'react';
import { Table, TableHeader, TableRow, TableColumn, TableBody } from './Table';
import { Paragraph } from './Paragraph';
import { Separtor } from './Separator';

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
                data-view
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
            <TableRow>
              <TableColumn>
                data-rotation-axis
              </TableColumn>
              <TableColumn>
                right | left | top
              </TableColumn>
              <TableColumn>
                  Sets the rotation axis of the plane
              </TableColumn>
            </TableRow>
            <TableRow>
              <TableColumn>
                data-rotation-value
              </TableColumn>
              <TableColumn>
                number
              </TableColumn>
              <TableColumn>
                Rotation angle in degrees
              </TableColumn>
            </TableRow>
            <TableRow>
              <TableColumn>
                data-animation
              </TableColumn>
              <TableColumn>
                position<sup>1</sup> 
              </TableColumn>
              <TableColumn>
                Final position of the animation
              </TableColumn>
            </TableRow>
            <TableRow>
              <TableColumn>
                data-animation-duration
              </TableColumn>
              <TableColumn>
                number<sup>2</sup> 
              </TableColumn>
              <TableColumn>
                Animation duration in milliseconds
              </TableColumn>
            </TableRow>
            <TableRow>
              <TableColumn>
                data-animation-easing
              </TableColumn>
              <TableColumn>
                linear | ease | ease-in | ease-out | step-start | step-end
              </TableColumn>
              <TableColumn>
                Animation easing function
              </TableColumn>
            </TableRow>
            <TableRow>
              <TableColumn>
                data-animation-repeat
              </TableColumn>
              <TableColumn>
                number<sup>3</sup>
              </TableColumn>
              <TableColumn>
                Number of times to repeat the animation
              </TableColumn>
            </TableRow>
            <TableRow>
              <TableColumn>
                data-animation-bounce
              </TableColumn>
              <TableColumn>
                boolean
              </TableColumn>
              <TableColumn>
                The animation alternates between the beginning and the end
              </TableColumn>
            </TableRow>
            <TableRow>
              <TableColumn>
                data-animation-running
              </TableColumn>
              <TableColumn>
                boolean
              </TableColumn>
              <TableColumn>
                The animation is running or paused
              </TableColumn>
            </TableRow>
          </TableBody>
        </Table>
        <Paragraph>
          <sup>1</sup> The position value could be any pair of position and value separated by spaces or comas. E.g.: <code>right: 100 left: 50</code> or <code>left: 100, top: 3</code><br />

          <sup>2</sup> This value should not be 0, if you choose 0, the animation will have 1000ms<br />

          <sup>3</sup> If this value is set to 0, the animation will run indefinitely<br />
        </Paragraph>
        <Separtor />
      </Fragment>
    );
};