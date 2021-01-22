import jss, { Classes } from 'jss';
import camelCase from 'jss-plugin-camel-case';
import { Positions, Rules } from '@types';
import { TYPE_UNDEFINED } from '@constants';
import { manageElementStyles } from '@dom';
import { Isometric, IsometricCSS } from './';

jss.use(camelCase());

const global = jss.createStyleSheet({
    base: Isometric.base,
    top: Isometric.top,
    front: Isometric.front,
    side: Isometric.side,
}).attach();

const Module = {

    createStyleSheet: (positions: Positions): Classes => {

        const styles: Rules = {};
    
        Object.keys(positions).forEach((name: string): void => {
            styles[name] = Isometric.getPosition(
                positions[name].right,
                positions[name].left,
                positions[name].top
            );
        });
    
        const stylesheet = jss.createStyleSheet(styles).attach();
        
        return {
            ...global.classes,
            ...stylesheet.classes,
        };
    
    },

    processDOM: () => manageElementStyles(global.classes),

    ...IsometricCSS

};

if (
    typeof window !== TYPE_UNDEFINED &&
    typeof window.document !== TYPE_UNDEFINED
) {
    window.addEventListener('DOMContentLoaded', Module.processDOM);
}

export { Module as Isometric };