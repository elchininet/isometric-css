import jss, { Classes } from 'jss';
import { Rules, ElementID } from '@types'; 
import { NAMESPACE } from '@constants';
import { getBackground, getPosition } from '@utilities';

export const manageElementStyles = (() => {

    let ELEMENT_ID = 0;

    const getID = () => `${NAMESPACE}_${ELEMENT_ID++}`;

    return (classes: Classes) => {

        const elementsIDs: ElementID[] = [];
        const styles: Rules = {};

        const elements = document.querySelectorAll(`.${NAMESPACE}`);
        
        Array.prototype.forEach.call(elements, (element: Element): void => {

            if (element instanceof HTMLElement && element.dataset.processed !== 'true') {

                // Access element data
                const plane = element.dataset.plane;
                const texture = element.dataset.texture;
                const textureSize = element.dataset.textureSize;
                const texturePixelated = element.dataset.texturePixelated === 'true';
                const right = +element.dataset.right || 0;
                const left = +element.dataset.left || 0;
                const top = +element.dataset.top || 0;

                // Add the base class
                element.classList.add(classes.base);

                // Add the plane classes
                if (
                    plane === 'top' ||
                    plane === 'front' ||
                    plane === 'side'
                ) {
                    element.classList.add(classes[plane]);
                }

                // Add the texture classes
                if (texture) {
                    const id = getID();
                    elementsIDs.push({
                        id,
                        element
                    });
                    styles[id] = getBackground(
                        texture,
                        textureSize,
                        texturePixelated
                    );
                }

                // Add position classes
                if (right || left || top) {
                    const id = getID();
                    elementsIDs.push({
                        id,
                        element
                    });
                    styles[id] = getPosition(
                        right,
                        left,
                        top
                    );
                }

                // Mark the element as processed
                element.classList.remove(NAMESPACE);
                element.dataset.processed = 'true';

            }
            
        });

        // Attach styles to the DOM
        if (elementsIDs.length) {
            const stylesheet = jss.createStyleSheet(styles).attach();    
            elementsIDs.forEach((elementID: ElementID): void => {    
                elementID.element.classList.add(stylesheet.classes[elementID.id]);    
            });   
        }

    };

})();