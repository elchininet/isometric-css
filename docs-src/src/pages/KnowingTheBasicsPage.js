import React, {Fragment} from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { Paragraph } from '../components/Paragraph';
import { Graphic } from '../components/Graphic';
import * as Graphics from '../graphics';

export const KnowingTheBasicsPage = () => {
    return (
        <Fragment>
            <SectionTitle level={1} separator>
                Knowing the basics
            </SectionTitle>
            <Graphic>
                <Graphics.Planes />
            </Graphic>
            <Paragraph>
                When an isometric plane is created it will be placed by default in the top-left corner of its container, which in isometric terms corresponds to the center of the isometric (0 right, 0 left, 0 top). You can see in the above graphic the default position of each plane when they are placed in these coordinates.
            </Paragraph>
            <Graphic>
                <Graphics.PlanesSteps />
            </Graphic>
            <Paragraph>
                Let's assume that each plane has a width and height of 100px, let's move these three planes to get used to the isometric coordinates. In the <em>Step 1</em>, the front plane has been moved 100px to the right; in the <em>Step 2</em>, the side plane has been moved 100px to the left; and in the <em>Step 3</em>, the top plane has been moved 100px to the top. The result it is shown at the end.
            </Paragraph>
        </Fragment>
    );
};