import React, { Fragment } from 'react';
import outdent from 'outdent';
import { SectionTitle } from '../components/SectionTitle';
import { Paragraph } from '../components/Paragraph';
import { Code } from '../components/Code';
import { Link } from '../components/Link';
import { TableDataset } from '../components/TableDataset';

export const BrowserPage = () => {
    return (
        <Fragment>
            <SectionTitle level={1} separator>
                Set up the library
            </SectionTitle>
            <Paragraph>
                Let's start installing the library:
            </Paragraph>
            <Code language="bash">
                npm install isometric-css --save
            </Code>
            <Paragraph>
                If you plan to use the library in the browser, the easieast way to do it is through the <em>browser</em> package using declarative HTML attributes. First of all, the library should be included in your code. If you are working with modules to generate a final bundle, you just need to import the module:
            </Paragraph>
            <Code>
                import 'isometric-css/browser';
            </Code>
            <Paragraph>
                If you want to import the library directly in the browser, just copy the <em>browser.js</em> file loacated in the <em>dist</em> folder, to a directory in your project directory and add a reference to it in the HTML:
            </Paragraph>
            <Code language="markup" separator>
                {outdent`
                    <body>
                    ...
                    <script src="wherever/you/installed/browser.js" />
                    </body>
                `}        
            </Code>
            <Paragraph title="Add the isometric class">
                All the elements that should be transformed, shall include the <em>isometric</em> class name. These elements will be absolute positioned so they should be placed inside an container (absolute or relative positioned).
            </Paragraph>
            <Code language="markup" separator>
                {outdent`
                    <div class="isometric" />
                `}        
            </Code>
            <Paragraph title="Dataset attributes">
                When the page loads, all the elements with the <em>isometric</em> class will be transformed taking into account their <Link href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes">data attributes</Link>. Each data attribute has its own purpose, the next table describes them:
            </Paragraph>
            <TableDataset />
        </Fragment>
    );
};