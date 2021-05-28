import React, { Fragment } from 'react';
import { Link as RouterLink } from "react-router-dom";
import outdent from 'outdent';
import { SectionTitle } from '../components/SectionTitle';
import { Paragraph } from '../components/Paragraph';
import { Link } from '../components/Link';
import { TableDataset } from '../components/TableDataset';
import { Code } from '../components/Code';

export const LibraryApiPage = () => {

    return (
        <Fragment>
            <SectionTitle level={1} separator>
                Library API
            </SectionTitle>
            <Paragraph title="Dataset attributes">
                If you are planning to use the library with declarative data attributes in the HTML code, you need to follow this step. All the elements that should be transformed, shall include the <em>isometric</em> class name. These elements will be absolute positioned so they should be placed inside a container (absolute or relative positioned).
            </Paragraph>
            <Code language="markup">
                {outdent`
                    <div class="isometric" />
                `}        
            </Code>
            <Paragraph>
                When the page loads, all the elements with the <em>isometric</em> class will be transformed taking into account their <Link href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes">data attributes</Link>. These attributes will be interpreted, some CSS rules will be created under the hood, applied to these elements, and inserted in the page header. Each data attribute has its own purpose, the next table describes them. If you want to check how to implement this, you can check the <RouterLink to="/code-example">Code Example</RouterLink> section.
            </Paragraph>
            <TableDataset />
            <Paragraph title="Methods">
                In the <RouterLink to="/using-the-library">Using the library</RouterLink> section, it was explained that it is possible to import the library directly in your code or to import a module with the available methods. No matter how you have included the library in your code, there will be a global <em>IsometricCSS</em> object available in <em>window</em> with the same methods. You can use these methods to apply transformations to HTML elements through JavaScript.
            </Paragraph>            
            <Paragraph title="processDOM" titleLevel={4}>
                If you create elements with the isometric class and some data attributes dynamically after the page-load, this method can be called to process all of them.
            </Paragraph>
            <Code language="typescript">
                IsometricCSS.processDOM(): void;       
            </Code>
            
            <Paragraph title="processElement" titleLevel={4}>
                This method processes a specific element with some data attributes, no matter if it has the isometric class or not.
            </Paragraph>
            <Code language="typescript">
                IsometricCSS.processElement(element: HTMLElement): void;       
            </Code>

            <Paragraph title="setView" titleLevel={4}>
                Apply the necessary CSS transformations to set the plane view.
            </Paragraph>
            <Code language="typescript">
                {outdent`
                    type View = 'top' | 'front' | 'side';

                    IsometricCSS.setPlane(element: HTMLElement, view: View): void;
                `}    
            </Code>

            <Paragraph title="setPosition" titleLevel={4}>
                Apply the necessary CSS to positionate an element in the screen taking into account an isometric coordinate.
            </Paragraph>
            <Code language="typescript">
                {outdent`
                    interface IsometricPoint {
                        right?: number;
                        left?: number;
                        top?: number;
                    };

                    IsometricCSS.setPosition(element: HTMLElement, point: IsometricPoint): void;
                `}    
            </Code>

            <Paragraph title="setRotation" titleLevel={4}>
                Apply the necessary CSS to set the rotation of a plane.
            </Paragraph>
            <Code language="typescript">
                {outdent`
                    interface Rotation {
                        axis: 'right' | 'left' | 'top';
                        value: number;
                    };

                    IsometricCSS.setRotation(element: HTMLElement, rotation: Rotation): void;
                `}    
            </Code>

            <Paragraph title="setTexture" titleLevel={4}>
                Apply the necessary CSS to set the texture of an element using background CSS properties.
            </Paragraph>
            <Code language="typescript">
                {outdent`
                    interface Texture {
                        url: string;
                        size?: string;
                        pixelated?: boolean;
                    };

                    IsometricCSS.setTexture(element: HTMLElement, texture: Texture): void;
                `}    
            </Code>

            <Paragraph title="setAnimation" titleLevel={4}>
                Set an animation in the element
            </Paragraph>
            <Code language="typescript">
                {outdent`
                    interface IsometricPosition {
                        right?: number;
                        left?: number;
                        top?: number;
                    }

                    interface Animation {
                        position: IsometricPosition;
                        duration?: number;
                        easing?: string;
                        repeat?: number;
                        bounce?: boolean;
                    };

                    IsometricCSS.setAnimation(element: HTMLElement, animation: Animation): void;
                `}                   
            </Code>

            <Paragraph title="resetAnimation" titleLevel={4}>
                If the animation is finished, this method resets it so it can be started again (if there is any)
            </Paragraph>
            <Code language="typescript">
                IsometricCSS.resetAnimation(element: HTMLElement): void;                  
            </Code>

            <Paragraph title="pauseAnimation" titleLevel={4}>
                Pauses the animation (if there is any)
            </Paragraph>
            <Code language="typescript">
                IsometricCSS.pauseAnimation(element: HTMLElement): void;                  
            </Code>

            <Paragraph title="resumeAnimation" titleLevel={4}>
                Resumes the animation (if there is any)
            </Paragraph>
            <Code language="typescript">
                IsometricCSS.resumeAnimation(element: HTMLElement): void;                  
            </Code>

            <Paragraph title="resetElement" titleLevel={4}>
                Removes all the data attributes and classes created by the library.
            </Paragraph>
            <Code language="typescript">
                IsometricCSS.resetElement(element: HTMLElement): void;   
            </Code>
        </Fragment>
    );

};