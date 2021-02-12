import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import outdent from 'outdent';
import { IsometricCSS } from 'isometric-css';
import { SectionTitle } from '../components/SectionTitle';
import { Paragraph } from '../components/Paragraph';
import { Code } from '../components/Code';
import { CodeDemo } from '../components/CodeDemo';

export const CodeExamplePage = () => {

    useEffect(() => {
        if (typeof window !== 'undefined') {
            IsometricCSS.processDOM();
        }
    }, []);

    return (
        <Fragment>
            <SectionTitle level={1} separator>
                Code Example
            </SectionTitle>
            <Paragraph>
                We are going to show a minimum example of the library working with declarative data attributes in the HTML code. As we saw in the <Link to="/knowing-the-basics">Knowing the basics</Link> section, all the elements should be placed in a positioned container and the width and height of them are up to us. So we are going to create some CSS rules to set up this. First of all, a rule <em>.code-example-world</em> for the container of all the elements, positioned in the center of the page and with a height of 200px. And at the end, two rules with the sizes of the floor and the planes:
            </Paragraph>
            <Code language="css">
                {outdent`
                    .code-example-world {
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
                    <div class="code-example-world">
                      <div
                        class="isometric floor"
                        data-view="top"
                        data-texture="images/gray_wool.png"
                        data-texture-size="50px 50px"
                        data-texture-pixelated="true"
                      />
                      <div class="isometric" data-right="75" data-left="75">
                        <div
                          class="isometric plane"
                          data-view="top"
                          data-top="50"
                          data-texture="images/green_wool.png"
                          data-texture-pixelated="true"
                        />
                        <div
                          class="isometric plane"
                          data-view="front"
                          data-right="50"
                          data-texture="images/grass_block_side.png"
                          data-texture-pixelated="true"
                        />
                        <div
                          class="isometric plane"
                          data-view="side"
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
            <CodeDemo />
            <Paragraph>
                And if you inspect the HTML code, you will notice that some classes have been added to the elements giving them the previous appereance:
            </Paragraph>
            <Code language="markup">
                {outdent`
                    <div class="code-example-world">
                      <div
                        class="isometric floor isometric-1lltdb0"
                        data-view="top"
                        data-texture="/static/media/gray_wool.bae7fb6f.png"
                        data-texture-size="50px 50px"
                        data-texture-pixelated="true"
                      />
                      <div
                        class="isometric isometric-x5j5x1"
                        data-right="75"
                        data-left="75"
                      >
                        <div
                          class="isometric plane isometric-1d06mbs"
                          data-view="top"
                          data-top="50"
                          data-texture="/static/media/green_wool.efa789af.png"
                          data-texture-pixelated="true"
                        />
                        <div
                          class="isometric plane isometric-l8z3tx"
                          data-view="front"
                          data-right="50"
                          data-texture="/static/media/grass_block_side.f48abe15.png"
                          data-texture-pixelated="true"
                        />
                        <div
                          class="isometric plane isometric-1okl41l"
                          data-view="side"
                          data-left="50"
                          data-texture="/static/media/grass_block_side.f48abe15.png"
                          data-texture-pixelated="true"
                        />
                      </div>
                    </div>
                `}
            </Code>
        </Fragment>
    );
};