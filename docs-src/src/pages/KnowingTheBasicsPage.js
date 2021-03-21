import React, {Fragment} from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { Paragraph } from '../components/Paragraph';
import { Graphic } from '../components/Graphic';
import { Link } from '../components/Link';
import { TableRotations } from '../components/TableRotations';
import * as Graphics from '../graphics';

export const KnowingTheBasicsPage = () => {
    return (
        <Fragment>
            <SectionTitle level={1} separator>
                Knowing the basics
            </SectionTitle>
            <Paragraph>
                To give the apperance of an <Link href="https://en.wikipedia.org/wiki/Isometric_projection">isometric projection</Link> to an HTML element, it is needed to apply <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/transform">CSS transformations</Link> to it. This transformations could be complex to manage, and even more when we have multiple elements and we want to translate or rotate them. The <Link href="https://github.com/elchininet/isometric-css">isometric-css library</Link> can help you with this task, it will create the necessary CSS rules to transform the HTML elements and attach them to the page automatically. You can either apply the transformation through declarative <Link href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/data-*">data attributes</Link> in the HTML code or use the library API methods to apply the transformations to the elements dynamically using JavaScript.
            </Paragraph>
            <Paragraph>
                Using this library, the width and height of each element is up to you and your code. The library will be only responsible for its CSS transformations and position.
            </Paragraph>
            <Graphic>
                <Graphics.Planes />
            </Graphic>
            <Paragraph>
                When an isometric plane is created with this library, it will be placed relatively to the top-left corner of its container, which in isometric terms corresponds to the center of the isometric {'{'}0 right, 0 left, 0 top{'}'}. You can see in the above graphic the default position of each plane.
            </Paragraph>
            <Paragraph>
                After the plane is in its default position, if you need to move it, you shall use a coordinate system based on three axis (right, left, and top). Due to the nature of an isometric projection, two planes in different isometric coordinates will share the same two dimensional coordinates. For example, a plane placed in the {'{'}0, 0, 0{'}'} coordinates, will share the same position as a plane in the {'{'}100, 100, 100{'}'} coordinates. 
            </Paragraph>
            <Paragraph>
                Check the next graphic in which each plane will be moved to a diferent position. Let's assume that each plane has a width and height of 100px.
            </Paragraph>
            <Graphic>
                <Graphics.PlanesSteps />
            </Graphic> 
            <Paragraph>
                In <em>Step 1</em>, the front plane has been moved 100px to the right; in <em>Step 2</em>, the side plane has been moved 100px to the left; and in <em>Step 3</em>, the top plane has been moved 100px to the top. The result it is shown at the end.
            </Paragraph>
            <Paragraph>
                Let's check how to rotate the planes.
            </Paragraph>
            <Graphic>
                <Graphics.PlaneRotations />
            </Graphic>
            <Paragraph>
                The planes can be rotated clockwise in any of the three axis and taking as the center of rotation the isometric origin {'{'}0, 0, 0{'}'}. In the next image, all the planes have been rotated, the front plane has been rotated 30º in the top axis, the side plane has been rotated 30º in the right axis, and the top panel has been rotated 30º in the left axis.
            </Paragraph>
            <Graphic>
                <Graphics.PlanesRotated />
            </Graphic>
            <Paragraph>
                This means that any plane, no matter its view, can be rotated into another view. The next table shows this:
            </Paragraph>
            <TableRotations />
        </Fragment>
    );
};