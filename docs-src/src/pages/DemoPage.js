import React, { Fragment, useEffect } from 'react';
import outdent from 'outdent';
import { SectionTitle } from '../components/SectionTitle';
import { Paragraph } from '../components/Paragraph';
import { Code } from '../components/Code';
import { Demo } from '../components/Demo';

export const DemoPage = () => {

    useEffect(() => {
        if (
            typeof window !== 'undefined' &&
            typeof window.Isometric !== 'undefined'
        ) {
            window.Isometric.processDOM();
        }
    }, []);

    return (
        <Fragment>
            <SectionTitle level={1} separator>
                Example demo
            </SectionTitle>
            <Paragraph>
                Giving the next <em>CSS</em> code:
            </Paragraph>
            <Code language="css">
                {outdent`
                    .world {
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
                And the the next <em>HTML</em> code:
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
                                data-texture-size="cover"
                                data-texture-pixelated="true"
                            />
                            <div
                                class="isometric plane"
                                data-plane="front"
                                data-right="50"
                                data-texture="images/grass_block_side.png"
                                data-texture-size="cover"
                                data-texture-pixelated="true"
                            />
                            <div
                                class="isometric plane"
                                data-plane="side"
                                data-left="50"
                                data-texture="images/grass_block_side.png"
                                data-texture-size="cover"
                                data-texture-pixelated="true"
                            />
                        </div>
                    </div>
                `} 
            </Code>
            <Paragraph>
                We will get the next result:
            </Paragraph>
            <Demo />
        </Fragment>
    );
};