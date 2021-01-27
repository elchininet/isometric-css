import React, { Fragment } from 'react';
import { Link as RouterLink } from "react-router-dom";
import outdent from 'outdent';
import { SectionTitle } from '../components/SectionTitle';
import { Paragraph } from '../components/Paragraph';
import { Code } from '../components/Code';
import { Link } from '../components/Link';
import { TableDataset } from '../components/TableDataset';
import { DynamicTable } from '../components/DynamicTable';

export const BrowserPage = () => {
    return (
        <Fragment>
            <SectionTitle level={1} separator>
                Using the library in the browser
            </SectionTitle>
            <Paragraph>
                This is the easiest way to use the library. It automatically reads the properties of the designated DOM elements, and using the power of <Link href="https://cssinjs.org">JSS</Link>, translate them to <em>CSS</em> rules and insert them to the header of the page.
            </Paragraph>
            <SectionTitle>
                Include the library in your code
            </SectionTitle>
            <Paragraph>
                Let's start installing the library:
            </Paragraph>
            <Code language="bash">
                npm install isometric-css --save
            </Code>
            <Paragraph>
                If you are working with modules to generate a final bundle, you just need to import the library:
            </Paragraph>
            <Code>
                {outdent`
                    // Importing the browser library using ES6 modules
                    import 'isometric-css/browser';

                    // Importing the browser library using common-js
                    require('isometric-css/browser');
                `}
            </Code>
            <Paragraph>
                If you want to import the library directly in the browser, just copy the <em>browser.js</em> file loacated in the <em>dist</em> folder to a directory in your project directory and add a reference to it in the HTML:
            </Paragraph>
            <Code language="markup" separator>
                {outdent`
                    <body>
                        ...
                        <script src="wherever/you/installed/browser.js" />
                    </body>
                `}        
            </Code>
            <Paragraph title="Add the isometric class to the elements">
                All the elements that should be transformed, shall include the <em>isometric</em> class name. These elements will be absolute positioned so they should be placed inside a container (absolute or relative positioned).
            </Paragraph>
            <Code language="markup" separator>
                {outdent`
                    <div class="isometric" />
                `}        
            </Code>
            <Paragraph title="Dataset attributes">
                When the page loads, all the elements with the <em>isometric</em> class will be transformed taking into account their <Link href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes">data attributes</Link>. Each data attribute has its own purpose, the next table describes them. If you want to check how to implement this, you can check the <RouterLink to="/demo">Browser library demo</RouterLink> section.
            </Paragraph>
            <TableDataset />
            <Paragraph title="API">
                When you load the library in the browser, you will have a global <em>Isometric</em> object available with these properties and methods:
            </Paragraph>
            <DynamicTable
                title="Properties"
                header={['Property', 'Description']}
                rows={[
                    {
                        columns: ['base', 'Style declarations of the base class for a plane'],
                        code: outdent`
                            Isometric.base
        
                            /*
                            position: absolute;
                            transform-origin: 0 0;
                            -ms-transform-origin: 0 0;
                            -webkit-transform-origin: 0 0;
                            */
                        `
                    },
                    {
                        columns: ['top', 'Style declarations of a top plane class'],
                        code: outdent`
                            Isometric.top
        
                            /*
                            transform: rotate(-60deg) skewY(30deg) scaleX(0.866025) translate(-100%, 0%);
                            -webkit-transform: rotate(-60deg) skewY(30deg) scaleX(0.866025) translate(-100%, 0%);
                            -ms-transform: rotate(-60deg) skewY(30deg) scaleX(0.866025) translate(-100%, 0%);
                            */
                        `
                    },
                    {
                        columns: ['front', 'Style declarations of a front plane class'],
                        code: outdent`
                            Isometric.front
                            
                            /*
                            transform: skewY(-30deg) scaleX(0.866025) translate(-100%, -100%);
                            -webkit-transform: skewY(-30deg) scaleX(0.866025) translate(-100%, -100%);
                            -ms-transform: skewY(-30deg) scaleX(0.866025) translate(-100%, -100%);
                            */
                        `
                    },
                    {
                        columns: ['side', 'Style declarations of a side plane class'],
                        code: outdent`
                            Isometric.side
                            
                            /*
                            transform: skewY(30deg) scaleX(0.866025) translate(0%, -100%);
                            -webkit-transform: skewY(30deg) scaleX(0.866025) translate(0%, -100%);
                            -ms-transform: skewY(30deg) scaleX(0.866025) translate(0%, -100%);
                            */
                        `
                    }
                ]}
            />
            <DynamicTable
                title="Methods"
                header={['Method', 'Description']}
                rows={[
                    {
                        columns: ['getPosition', 'Giving the isometric coordinates, returns the style declarations to positionate an element'],
                        code: outdent`
                            Isometric.getPosition(right: number, left: number, top: number): string;
        
                            Isometric.getPosition(100, 0, 100)
                            
                            /*
                            left: 86.6025px;
                            top: -50px;
                            */
                        `
                    },
                    {
                        columns: ['getBackground', 'Giving the texture properties, returns the style declarations to set the background properties of an element'],
                        code: outdent`
                            Isometric.getBackground(url: string, size: string, pixelated: boolean = false): string;
        
                            Isometric.getBackground('images/my_texture.png', '10px 10px', true)
                            
                            /*
                            background-image: url(images/my_texture.png);
                            background-size: 10px 10px;
                            image-rendering: pixelated;
                            image-rendering: crisp-edges;
                            -ms-interpolation-mode: nearest-neighbor;
                            */
                        `
                    },
                    {
                        columns: ['createStyleSheet', 'Giving an object of positions, returns an object with class names that can be used to assign them to the DOM elements.'],
                        code: outdent`
                            type Position = {
                                right: number;
                                left: number;
                                top: number;
                            };

                            Isometric.createStyleSheet(positions: Record<string, Position>): Record<string, string>;
        
                            const styles = Isometric.createStyleSheet({
                                position1: {
                                    right: 100,
                                    left: 0,
                                    top: 100
                                },
                                position2: {
                                    right: 0,
                                    left: 100,
                                    top: 100
                                }
                            });
                            
                            /* styles object
                            {
                                "base": "base-0-0-1",
                                "top": "top-0-0-2",
                                "front": "front-0-0-3",
                                "side": "side-0-0-4",
                                "position1": "position1-0-0-5",
                                "position2": "position2-0-0-6"
                            }
                            */
                        `
                    },
                    {
                        columns: ['processDOM', 'If you create elements with the isometric class dynamically after the page-load, this method can be called to process them.'],
                        code: outdent`
                            Isometric.processDOM(): void;
                        `
                    }
                ]}
            />
        </Fragment>
    );
};