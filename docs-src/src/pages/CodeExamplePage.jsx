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
                We are going to show a minimum example of the library working with declarative data attributes in the HTML code. As we saw in the <Link to="/knowing-the-basics">Knowing the basics</Link> section, all the elements should be placed in a positioned container and the width and height of them are up to us. So we are going to create some CSS rules to set up this. First of all, a rule <em>.code-example-world</em> for the container of all the elements, positioned in the center of the page. And at the end, two rules with the sizes of the floor and the planes:
            </Paragraph>
            <Code language="css">
                {outdent`
                    .code-example-world {
                      left: 50%;
                      position: relative;
                      top: 20%;
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
                Now, let’s create our HTML markup adding to each element that should be transformed the <em>isometric</em> class and the data attributes with the information of these transformations. Elements with the <em>isometric</em> class and without the <em>data-view</em> parameter are taken as groups:
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
                      ></div>
                      <div class="isometric">
                        <div
                          class="isometric plane"
                          data-view="top"
                          data-top="50"
                          data-texture="images/green_wool.png"
                          data-texture-pixelated="true"
                        ></div>
                        <div
                          class="isometric plane"
                          data-view="front"
                          data-right="50"
                          data-texture="images/grass_block_side.png"
                          data-texture-pixelated="true"
                        ></div>
                        <div
                          class="isometric plane"
                          data-view="side"
                          data-left="50"
                          data-texture="images/grass_block_side.png"
                          data-texture-pixelated="true"
                        ></div>
                      </div>
                    </div>
                `} 
            </Code>
            <Paragraph>
                After the page-load, all the elements will be transformed resulting in the next:
            </Paragraph>
            <CodeDemo />
            <Paragraph>
                Let’s give a position to the group element, 75 in the right and 75 in the left:
            </Paragraph>
            <Code language="markup">
                {outdent`
                    <div class="code-example-world">
                      <div
                        class="isometric floor"
                        data-view="top"
                        data-texture="/static/media/gray_wool.bae7fb6f.png"
                        data-texture-size="50px 50px"
                        data-texture-pixelated="true"
                      ></div>
                      <div
                        class="isometric"
                        data-right="75"
                        data-left="75"
                      >
                        ...
                      </div>
                    </div>
                `}
            </Code>
            <CodeDemo moved />
            <Paragraph>
                Let’s rotate the group:
            </Paragraph>
            <Code language="markup">
                {outdent`
                    <div class="code-example-world">
                      <div
                        class="isometric floor"
                        data-view="top"
                        data-texture="/static/media/gray_wool.bae7fb6f.png"
                        data-texture-size="50px 50px"
                        data-texture-pixelated="true"
                      ></div>
                      <div
                        class="isometric"
                        data-right="75"
                        data-left="75"
                        data-rotation-axis="top"
                        data-rotation-value="30"
                      >
                        ...
                      </div>
                    </div>
                `}
            </Code>
            <CodeDemo moved rotated />
            <Paragraph>
                It is even possible to have groups inside other groups:
            </Paragraph>
            <Code language="markup">
                {outdent`
                    <div class="code-example-world">
                      <div
                        class="isometric floor"
                        data-view="top"
                        data-texture="/static/media/gray_wool.bae7fb6f.png"
                        data-texture-size="50px 50px"
                        data-texture-pixelated="true"
                      ></div>
                      <div
                        class="isometric"
                        data-right="75"
                        data-left="75"
                        data-rotation-axis="top"
                        data-rotation-value="30"
                      >
                        <div
                          class="isometric"
                          data-rotation-axis="right"
                          data-rotation-value="30"
                        >
                          ...
                        </div>
                      </div>
                    </div>
                `}
            </Code>
            <CodeDemo moved rotated doubleRotated />
            <Paragraph>
                Let’s add an animation in the root element
            </Paragraph>
            <Code language="markup">
                {outdent`
                    <div class="code-example-world">
                      <div
                        class="isometric floor"
                        data-view="top"
                        data-texture="/static/media/gray_wool.bae7fb6f.png"
                        data-texture-size="50px 50px"
                        data-texture-pixelated="true"
                      ></div>
                      <div
                        class="isometric"
                        data-right="75"
                        data-left="75"
                        data-rotation-axis="top"
                        data-rotation-value="30"
                        data-animation="right: 180 left: 10"
                        data-animation-repeat="0"
                        data-animation-easing="ease-in-out"
                        data-animation-bounce="true"
                      >
                        ...
                      </div>
                    </div>
                `}
            </Code>
            <CodeDemo moved rotated doubleRotated animation />
            <Paragraph>
                Now it’s your turn for experimenting with the library 😉
            </Paragraph>
        </Fragment>
    );
};