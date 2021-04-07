import React, { Fragment } from 'react';
import outdent from 'outdent';
import { SectionTitle } from '../components/SectionTitle';
import { Paragraph } from '../components/Paragraph';
import { Code } from '../components/Code';

export const UsingTheLibrary = () => {
    return (
        <Fragment>
            <SectionTitle level={1} separator>
                Using the library
            </SectionTitle>
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
                If you are working with modules to generate a final bundle, you just need to import the library. If you are planning to use the library with declarative data attributes in the HTML code, just import the module:
            </Paragraph>
            <Code>
                {outdent`
                    // Importing the library using ES6
                    import 'isometric-css';

                    // Importing the library using common-js
                    require('isometric-css');
                `}
            </Code>
            <Paragraph>
                But if you want to use the library API methods in the code, import the <em>IsometricCSS</em> methods module:
            </Paragraph>
            <Code>
                {outdent`
                    // Importing the library methods module using ES6
                    import { IsometricCSS } from 'isometric-css';

                    // Importing the library methods module using common-js
                    const { IsometricCSS } = require('isometric-css');
                `}
            </Code>
            <Paragraph>
                If you want to import the library directly in the browser, just copy the <em>index.js</em> file loacated in the <em>dist</em> folder to a directory in your project, and add a reference to it in the HTML:
            </Paragraph>
            <Code language="markup">
                {outdent`
                    <body>
                        ...
                        <script src="wherever/you/installed/index-file-renamed.js"></script>
                    </body>
                `}        
            </Code>
            <Paragraph>
                After that, you will have a global <em>IsometricCSS</em> object that will holds all the methods.
            </Paragraph>
        </Fragment>
    );
};