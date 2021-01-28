import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import outdent from 'outdent';
import { IsometricCSS } from 'isometric-css';
import { SectionTitle } from '../components/SectionTitle';
import { Paragraph } from '../components/Paragraph';
import { Code } from '../components/Code';
import { Demo } from '../components/Demo';

export const DemoPage = () => {

    useEffect(() => {
        if (typeof window !== 'undefined') {
            IsometricCSS.processDOM();
        }
    }, []);

    return (
        <Fragment>
            <SectionTitle level={1} separator>
                Example demo
            </SectionTitle>
            <Paragraph>
                We are going to show a minimum example of the library working with declarative data attributes in the HTML code. As we saw in the <Link to="/">Knowing the basics</Link> section, all the elements should be placed in a positioned container and the width and height of them are up to us. So we are going to create some CSS rules to set up this. First of all a rule <em>.world</em> for the container of all the elements, positioned in the center of the page and with a height of 200px. And at the end, two rules with the sizes of the floor and the planes:
            </Paragraph>
            <Code language="css">
                {outdent`
                    .world {
                      height: 200px;
                      left: 50%;
                      position: relative;
                    }
                    .floor {
                      height: 200px;
                      width: 200px;
                    }
                    .plane {
                      height: 50px;
                      width: 50px;
                    }
                `} 
            </Code>
            <Paragraph>
                Now, let's create our HTML markup adding to each element that should be transformed the <em>isometric</em> class and the data attributes with the information of these transformations:
            </Paragraph>
            <Code language="markup">
                {outdent`
                    <div class="world">
                      <div
                        class="isometric floor"
                        data-plane="top"
                        data-texture="images/gray_wool.png"
                        data-texture-size="50px 50px"
                        data-texture-pixelated="true"
                      />
                      <div class="isometric" data-right="75" data-left="75">
                        <div
                          class="isometric plane"
                          data-plane="top"
                          data-top="50"
                          data-texture="images/green_wool.png"
                          data-texture-pixelated="true"
                        />
                        <div
                          class="isometric plane"
                          data-plane="front"
                          data-right="50"
                          data-texture="images/grass_block_side.png"
                          data-texture-pixelated="true"
                        />
                        <div
                          class="isometric plane"
                          data-plane="side"
                          data-left="50"
                          data-texture="images/grass_block_side.png"
                          data-texture-pixelated="true"
                        />
                      </div>
                    </div>
                `} 
            </Code>
            <Paragraph>
                After the page-load, all the elements will be transformed resulting in the next:
            </Paragraph>
            <Demo />
            <Paragraph>
                And if you inspect the HTML code, you will notice that all the attributes have been removed and some classes have been added to the elements giving them the previous appereance:
            </Paragraph>
            <Code language="markup">
                {outdent`
                    <div class="world">
                      <div
                        class="floor isometric-prqriw isometric-1lrvt5v isometric-gfudty"
                        data-classes="{872f65}"
                      />
                      <div
                        class="isometric-prqriw isometric-18njxjn"
                        data-classes="{1ghwobt}"
                      >
                        <div
                          class="plane isometric-prqriw isometric-1lrvt5v isometric-ugjrep isometric-1h2neyu"
                          data-classes="{lolqvi}{pvfxue}"
                        />
                        <div
                          class="plane isometric-prqriw isometric-pna9ky isometric-1syugtk isometric-d4tbqq"
                          data-classes="{1yxt7w6}{x2ychv}"
                        />
                        <div
                          class="plane isometric-prqriw isometric-t1dg2y isometric-1sta47s isometric-d4tbqq"
                          data-classes="{wnnugl}{x2ychv}"
                        />
                      </div>
                    </div>
                `}
            </Code>
        </Fragment>
    );
};