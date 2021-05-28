import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { Logo } from '../components/demo/Logo';
import { Houses } from '../components/demo/Houses';
import { Floor } from '../components/demo/Floor';
import { FenceSide } from '../components/demo/FenceSide';
import { FenceFront } from '../components/demo/FenceFront';

export const Demo = () => {

    const [scale, setScale] = useState(1);
    const [ready, setReady] = useState(false);
    const container = useRef();
    const delay = useRef();

    const resize = useCallback(() => {

        clearTimeout(delay.current);

        delay.current = setTimeout(() => {

            const width = container.current.clientWidth;
            
            setScale(
                Math.min(
                    Math.round((width / 780) * 1000) / 1000, 1
                )
            );

        }, 50);        

    }, []);

    const transform = useMemo(() => ({
        transform: `scale(${scale})`,
        WebkitTransform: `scale(${scale})`,
        MsTransform: `scale(${scale})`
    }), [scale]);

    useEffect(() => {
        resize();
        setReady(true);
        window.addEventListener('resize', resize);
        return () => {
            window.removeEventListener('resize', resize);
        };
    }, [resize]);

    return (
        <div className="container">
            <div className="demo-wrapper" ref={container} data-ready={ready}>
                <div className="world" style={transform}>
                    <div className="coords isometric">
                        <div
                            className="isometric grass"
                            data-view="top"
                            data-top="-10"
                        />
                        <Floor />
                        <Logo
                            right={75}
                            left={260}
                            top={-10}
                            animation={{
                                left: 400
                            }}
                        />
                        <FenceSide right={10} left={10} /> 
                        <FenceFront right={10} left={220}/>
                        <Houses right={45} left={40} />
                        <FenceFront right={435} left={220}/>
                        <FenceSide right={10} left={220} />                            
                    </div>
                </div>
            </div>
        </div>
    );
};