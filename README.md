<p align="center">
    A JavaScript library to create and apply isometric CSS classes
</p>

[![Build Status](https://travis-ci.com/elchininet/isometric.svg?branch=master)](https://travis-ci.com/elchininet/isometric) &nbsp; [![Coverage Status](https://coveralls.io/repos/github/elchininet/isometric/badge.svg?branch=master)](https://coveralls.io/github/elchininet/isometric?branch=master)

## Demo

https://elchininet.github.io/isometric/

## Installation

#### Using NPM

```
npm install @elchininet/isometric
```

#### Using Yarn

```
yarn add @elchininet/isometric
```

#### In the browser

It is possible to include a compiled version of the package directly in an HTML file. It will create global variables that can be accessed from anywhere in your JavaScript code.

1. Copy the JavaScript file `isometric.web.js`, located in the `dist` folder
2. Put it in the folder that you prefer in your web server
3. Include it in your HTML file

```javascript
<script src="wherever/you/installed/isometric.web.js" />
```

#### Importing using CommonJS

```javascript
const { IsometricCanvas, IsometricPath } = require('@elchininet/isometric');
```

#### Importing using ES6 modules

```javascript
import { IsometricCanvas, IsometricPath } from '@elchininet/isometric';
```

#### Using in the browser

```javascript
/* Use it directly in your JavaScript code */
IsometricCanvas;
IsometricPath;

/* Or access to the global variable if there is a variable with this name in the same scope */
window.IsometricCanvas;
window.IsometricPath;
```

## Scripts

#### build

`npm run build`

Transpiles the TypeScript code and creates two bundles in the `dist` folder (`index.js` for Node environments and `isometric.web.js` to use directly in the browser).

#### lint

`npm run lint`

Runs eslint in source files.

#### test

`npm run test`

Runs tests.

#### demo

`npm run demo`

Opens a development server that provides live reloading using [webpack-dev-server](https://github.com/webpack/webpack-dev-server). Some demo examples located in the `@demo` folder will be shown. You can modify the code of the demos and the changes will be live reloaded in the browser.

## API

### Class IsometricCanvas

This is the base class, it creates an isometric canvas (an SVG object)

```javascript
const isometric = new IsometricCanvas(element[, properties]);
```

<details><summary>Parameters</summary>
<p>

`element`
>The DOM element or the element `id` in which the isometric will be inserted

`properties` _(optional)_
>Object to set the properties of the isometric canvas

| Property        | Type          | Default value  | Description                                       |
| --------------- | ------------- | -------------- | ------------------------------------------------- |
| backgroundColor | string        | "white"        | Sets the background color of the isometric canvas |
| scale           | number        | 1              | Sets the scale multiplier of each isometric unit  |
| height          | number        | 480            | Sets the height of the isometric canvas           |
| width           | number        | 640            | Sets the width of the isometric canvas            |

</p>
</details>

<details><summary>Instance Methods</summary>
<p>

>All the instance methods (excepting `getElement`) return the same instance, so they are chainable.

```javascript
getElement()
```
>Returns the native `SVG` element

```javascript
addChild(child)
```
>Adds an isometric paths to the isometric canvas

| Parameter       | Type          |
| --------------- | ------------- |
| child           | IsometricPath |

```javascript
addChildren(child, child, child...)
```
>Adds multiple isometric paths to the isometric canvas

| Parameter       | Type          |
| --------------- | ------------- |
| child           | IsometricPath |

```javascript
removeChild(child)
```
>Removes an isometric path from the isometric canvas

| Parameter       | Type          |
| --------------- | ------------- |
| child           | IsometricPath |

```javascript
removeChildren(child, child, child...)
```
>Removes multiple isometric paths from the isometric canvas

| Parameter       | Type          |
| --------------- | ------------- |
| child           | IsometricPath |

```javascript
removeChildByIndex(index)
```
>Removes an isometric path taking into account its index in the paths tree

| Parameter       | Type          |
| --------------- | ------------- |
| index           | number        |

```javascript
clear()
```
>Cleans the isometric canvas (removes all the isometric paths from it and all the native SVG paths elements from the SVG)

```javascript
pauseAnimations()
```
>Pause all the animations (not compatible with Internet Explorer)

```javascript
resumeAnimations()
```
>Resume all the animations (not compatible with Internet Explorer)

```javascript
addEventListener(type, callback, [useCapture])
```
>Sets up a function that will be called whenever the specified event is delivered to the `IsometricCanvas` (the SVG element)

| Parameter       | Type          |
| --------------- | ------------- |
| type            | string        |
| callback        | VoidFunction  |
| callback        | boolean       |

```javascript
removeEventListener(type, callback, [useCapture])
```
>Removes from the `IsometricCanvas` (the SVG element) an event listener previously registered with `addEventListener`

| Parameter       | Type          |
| --------------- | ------------- |
| type            | string        |
| callback        | VoidFunction  |
| callback        | boolean       |

</p>
</details>

<details><summary>Instance Properties</summary>
<p>

| Property        | Type     | Description                                                       |
| --------------- | -------- | ----------------------------------------------------------------- |
| backgroundColor | string   | Gets and sets the background color of the isometric canvas        |
| scale           | number   | Gets and sets the multiplier scale of the isometric canvas        |
| height          | number   | Gets and sets the height of the isometric canvas                  |
| width           | number   | Gets and sets the width of the isometric canvas                   |
| animated        | boolean  | Gets if the SVG is animations are paused or are running           |

</p>
</details>

---

### Class IsometricPath

This is the class to create isometric paths that can be added to the isometric canvas

```javascript
const path = new IsometricPath([properties]);
```

<details><summary>Parameters</summary>
<p>

`properties` _(optional)_
>Object to set the properties of the isometric path

| Property        | Type          | Default value  | Description                                              |
| --------------- | ------------- | -------------- | -------------------------------------------------------- |
| fillColor       | string        | "white"        | Sets the fill color of the isometric path                |
| fillOpacity     | number        | 1              | Sets the fill opacity of the isometric path              |
| strokeColor     | string        | "black"        | Sets the stroke color of the isometric path              |
| strokeOpacity   | number        | 1              | Sets stroke opacity of the isometric path                |
| strokeDashArray | number[]      | []             | Sets the [SVG stroke dasharray][1] of the isometric path |
| strokeLinecap   | string        | "butt"         | Sets the [SVG stroke linecap][2] of the isometric path   |
| strokeLinejoin  | string        | "round"        | Sets the [SVG stroke linejoin][3] of the isometric path  |
| strokeWidth     | number        | 1              | Sets the stroke width of the isometric path              |

</p>
</details>

<details><summary>Instance Methods</summary>
<p>

>All the instance methods (excepting `getElement`) return the same instance, so they are chainable.

```javascript
getElement()
```
>Returns the native `SVG` path element

```javascript
update()
```
>Forces a re-render of the SVG path

```javascript
moveTo(right, left, top)
```
>Move the cursor to an isometric point, if the cursor was already in another point, no line is drawn between them.

| Parameter       | Type       | Description                              |
| --------------- | ---------- | ---------------------------------------- |
| right           | number     | Right value in the isometric coordinates |
| left            | number     | Left value in the isometric coordinates  |
| top             | number     | Top value in the isometric coordinates   |
    
```javascript
lineTo(right, left, top)
```
>Draws a line from the previous isometric point to the destination point.

| Parameter       | Type       | Description                                                       |
| --------------- | ---------- | ----------------------------------------------------------------- |
| right           | number     | Right value in the isometric coordinates of the destination point |
| left            | number     | Left value in the isometric coordinates of the destination point  |
| top             | number     | Top value in the isometric coordinates of the destination point   |

```javascript
curveTo(controlRight, controlLeft, controlTop, right, left, top)
```
>Draws a curve from the previous isometric point to the designated isometric point crossing the control isometric point.

| Parameter       | Type       | Description                                                       |
| --------------- | ---------- | ----------------------------------------------------------------- |
| controlRight    | number     | Right value in the isometric coordinates of the control point     |
| controlLeft     | number     | Left value in the isometric coordinates of the control point      |
| controlTop      | number     | Top value in the isometric coordinates of the control point       |
| right           | number     | Right value in the isometric coordinates of the destination point |
| left            | number     | Left value in the isometric coordinates of the destination point  |
| top             | number     | Top value in the isometric coordinates of the destination point   |
    
```javascript
mt(right, left, top)
```
>Alias of `moveTo`.

```javascript
lt(right, left, top)
```
>Alias of `lineTo`.

```javascript
ct(controlRight, controlLeft, controlTop, right, left, top)
```
>Alias of `curveTo`.

```javascript
draw(commands)
```
>Draws a line taking into account a series of drawing commands.

| Parameter       | Type       | Description                              |
| --------------- | ---------- | ---------------------------------------- |
| commands        | string     | A series of drawing commands. For example, `M0 0 0 L1 1 1 C 2 2 2 3 3 3`has the same effect as `moveTo(0, 0, 0).lineTo(1, 1, 1).curveTo(2, 2, 2, 3, 3, 3)` |

```javascript
clear()
```
>Cleans the IsometricPath (removes all the path commands from the native SVG path element)

```javascript
addAnimation(animation)
```
>Adds an animated element to the `IsometricPath` (not compatible with Internet Explorer). These are the properties of the `SVGPathAnimation` object:

| Property        | Type     | Optional  | Default |  Description                                     |
| --------------- | -------- | --------- | ------- | ------------------------------------------------ |
| property        | string   | no        | -       | Indicates which property should be animated      |
| duration        | number   | yes       | 1       | Indicates the number of seconds of the animation |
| repeat          | number   | yes       | 0       | Number of times that the animation will run. `0` runs indefinitely |
| from            | string / number | yes | - | Initial value of the animation (if this property is used, `values` property can't be used) |
| to              | string / number | yes | - | Final value of the animation (if this property is used, `values` property can't be used) |
| values          | string / number / string[] / number[] | yes | - | All the values of the animation (if this property is used, `from` and `to` properties can't be used) |

These are the properties that can be animated (property `property`)

* fillColor
* fillOpacity
* strokeColor
* strokeOpacity
* strokeWidth
* path

```javascript
removeAnimationByIndex(index)
```
>Remove an especific animation element by its index.

```javascript
removeAnimations()
```
>Remove all the animation elements.

```javascript
addEventListener(type, callback, [useCapture])
```
>Sets up a function that will be called whenever the specified event is delivered to the `IsometricPath` (the SVG path element)

| Parameter       | Type          |
| --------------- | ------------- |
| type            | string        |
| callback        | VoidFunction  |
| callback        | boolean       |

```javascript
removeEventListener(type, listener, [useCapture])
```
>Removes from the `IsometricPath` (the SVG path element) an event listener previously registered with `addEventListener`

| Parameter       | Type          |
| --------------- | ------------- |
| type            | string        |
| callback        | VoidFunction  |
| callback        | boolean       |

</p>
</details>

<details><summary>Instance Properties</summary>
<p>

| Property        | Type     | Description                                                       |
| --------------- | -------- | ----------------------------------------------------------------- |
| fillColor       | string   | Gets and sets the fill color of the isometric path                |
| fillOpacity     | number   | Gets and sets the fill opacity of the isometric path              |
| strokeColor     | string   | Gets and sets the stroke color of the isometric path              |
| strokeOpacity   | number   | Gets and sets the stroke opacity of the isometric path            |
| strokeDashArray | number[] | Gets and sets the [SVG stroke dasharray][1] of the isometric path |
| strokeLinecap   | string   | Gets and sets the [SVG stroke linecap][2] of the isometric path   |
| strokeLinejoin  | string   | Gets and sets the [SVG stroke linejoin][3] of the isometric path  |
| strokeWidth     | number   | Gets and sets the stroke width of the isometric path              |

</p>
</details>

---

### Class IsometricRectangle

This is the class to create isometric rectangles that can be added to the isometric canvas.

```javascript
const path = new IsometricRectangle(properties);
```

<details><summary>Parameters</summary>
<p>

`properties`
>Object to set the properties of the isometric rectangle

| Property        | Type          | Default value        | Description                                                          |
| --------------- | ------------- | -------------------- | -------------------------------------------------------------------- |
| height          | number        | -                    | Sets the height of the isometric rectangle                           |
| width           | number        | -                    | Sets the width of the isometric rectangle                            |
| planeView       | number        | PlaneView (`string`) | Sets the plane view in which the isometric rectangle will be created |
| fillColor       | string        | "white"              | Sets the fill color of the isometric rectangle                       |
| fillOpacity     | number        | 1                    | Sets the fill opacity of the isometric rectangle                     |
| strokeColor     | string        | "black"              | Sets the stroke color of the isometric rectangle                     |
| strokeOpacity   | number        | 1                    | Sets stroke opacity of the isometric rectangle                       |
| strokeDashArray | number[]      | []                   | Sets the [SVG stroke dasharray][1] of the isometric rectangle        |
| strokeLinecap   | string        | "butt"               | Sets the [SVG stroke linecap][2] of the isometric rectangle          |
| strokeLinejoin  | string        | "round"              | Sets the [SVG stroke linejoin][3] of the isometric rectangle         |
| strokeWidth     | number        | 1                    | Sets the stroke width of the isometric rectangle                     |

</p>
</details>

<details><summary>Instance Methods</summary>
<p>

>All the instance methods (excepting `getElement`) return the same instance, so they are chainable.

```javascript
getElement()
```
>Returns the native `SVG` path element

```javascript
update()
```
>Forces a re-render of the SVG rectangle

```javascript
clear()
```
>Cleans the IsometricRectangle (removes all the path commands from the native SVG path element)

```javascript
addAnimation(animation)
```
>Adds an animated element to the `IsometricRectangle` (not compatible with Internet Explorer). These are the properties of the `SVGRectangleAnimation` object:

| Property        | Type     | Optional  | Default |  Description                                     |
| --------------- | -------- | --------- | ------- | ------------------------------------------------ |
| property        | string   | no        | -       | Indicates which property should be animated      |
| duration        | number   | yes       | 1       | Indicates the number of seconds of the animation |
| repeat          | number   | yes       | 0       | Number of times that the animation will run. `0` runs indefinitely |
| from            | string / number | yes | - | Initial value of the animation (if this property is used, `values` property can't be used) |
| to              | string / number | yes | - | Final value of the animation (if this property is used, `values` property can't be used) |
| values          | string / number / string[] / number[] | yes | - | All the values of the animation (if this property is used, `from` and `to` properties can't be used) |

These are the properties that can be animated (property `property`)

* fillColor
* fillOpacity
* strokeColor
* strokeOpacity
* strokeWidth
* right
* left
* top
* width
* height

```javascript
removeAnimationByIndex(index)
```
>Remove an especific animation element by its index.

```javascript
removeAnimations()
```
>Remove all the animation elements.

```javascript
addEventListener(type, callback, [useCapture])
```
>Sets up a function that will be called whenever the specified event is delivered to the `IsometricRectangle` (the SVG path element)

| Parameter       | Type          |
| --------------- | ------------- |
| type            | string        |
| callback        | VoidFunction  |
| callback        | boolean       |

```javascript
removeEventListener(type, listener, [useCapture])
```
>Removes from the `IsometricRectangle` (the SVG path element) an event listener previously registered with `addEventListener`

| Parameter       | Type          |
| --------------- | ------------- |
| type            | string        |
| callback        | VoidFunction  |
| callback        | boolean       |

</p>
</details>

<details><summary>Instance Properties</summary>
<p>

| Property        | Type     | Description                                                              |
| --------------- | -------- | ------------------------------------------------------------------------ |
| height          | number   | Gets and sets the height of the isometric rectangle                      |
| width           | number   | Gets and sets the width of the isometric rectangle                       |
| planeView       | string   | Gets and sets the plane view in which the isometric rectangle is created |
| fillColor       | string   | Gets and sets the fill color of the isometric rectangle                  |
| fillOpacity     | number   | Gets and sets the fill opacity of the isometric rectangle                |
| strokeColor     | string   | Gets and sets the stroke color of the isometric rectangle                |
| strokeOpacity   | number   | Gets and sets the stroke opacity of the isometric rectangle              |
| strokeDashArray | number[] | Gets and sets the [SVG stroke dasharray][1] of the isometric rectangle   |
| strokeLinecap   | string   | Gets and sets the [SVG stroke linecap][2] of the isometric rectangle     |
| strokeLinejoin  | string   | Gets and sets the [SVG stroke linejoin][3] of the isometric rectangle    |
| strokeWidth     | number   | Gets and sets the stroke width of the isometric rectangle                |

</p>
</details>

---

### Class IsometricCircle

This is the class to create isometric circles that can be added to the isometric canvas.

```javascript
const path = new IsometricCircle(properties);
```

<details><summary>Parameters</summary>
<p>

`properties`
>Object to set the properties of the isometric rectangle

| Property        | Type          | Default value        | Description                                                       |
| --------------- | ------------- | -------------------- | ----------------------------------------------------------------- |
| radius          | number        | -                    | Sets the radius of the isometric circle                           |
| planeView       | number        | PlaneView (`string`) | Sets the plane view in which the isometric circle will be created |
| fillColor       | string        | "white"              | Sets the fill color of the isometric circle                       |
| fillOpacity     | number        | 1                    | Sets the fill opacity of the isometric circle                     |
| strokeColor     | string        | "black"              | Sets the stroke color of the isometric circle                     |
| strokeOpacity   | number        | 1                    | Sets stroke opacity of the isometric circle                       |
| strokeDashArray | number[]      | []                   | Sets the [SVG stroke dasharray][1] of the isometric circle        |
| strokeLinecap   | string        | "butt"               | Sets the [SVG stroke linecap][2] of the isometric circle          |
| strokeLinejoin  | string        | "round"              | Sets the [SVG stroke linejoin][3] of the isometric circle         |
| strokeWidth     | number        | 1                    | Sets the stroke width of the isometric circle                     |

</p>
</details>

<details><summary>Instance Methods</summary>
<p>

>All the instance methods (excepting `getElement`) return the same instance, so they are chainable.

```javascript
getElement()
```
>Returns the native `SVG` path element

```javascript
update()
```
>Forces a re-render of the SVG circle

```javascript
clear()
```
>Cleans the IsometricCircle (removes all the path commands from the native SVG path element)

```javascript
addAnimation(animation)
```
>Adds an animated element to the `IsometricCircle` (not compatible with Internet Explorer). These are the properties of the `SVGCircleAnimation` object:

| Property        | Type     | Optional  | Default |  Description                                     |
| --------------- | -------- | --------- | ------- | ------------------------------------------------ |
| property        | string   | no        | -       | Indicates which property should be animated      |
| duration        | number   | yes       | 1       | Indicates the number of seconds of the animation |
| repeat          | number   | yes       | 0       | Number of times that the animation will run. `0` runs indefinitely |
| from            | string / number | yes | - | Initial value of the animation (if this property is used, `values` property can't be used) |
| to              | string / number | yes | - | Final value of the animation (if this property is used, `values` property can't be used) |
| values          | string / number / string[] / number[] | yes | - | All the values of the animation (if this property is used, `from` and `to` properties can't be used) |

These are the properties that can be animated (property `property`)

* fillColor
* fillOpacity
* strokeColor
* strokeOpacity
* strokeWidth
* right
* left
* top
* radius

```javascript
removeAnimationByIndex(index)
```
>Remove an especific animation element by its index.

```javascript
removeAnimations()
```
>Remove all the animation elements.

```javascript
addEventListener(type, callback, [useCapture])
```
>Sets up a function that will be called whenever the specified event is delivered to the `IsometricCircle` (the SVG path element)

| Parameter       | Type          |
| --------------- | ------------- |
| type            | string        |
| callback        | VoidFunction  |
| callback        | boolean       |

```javascript
removeEventListener(type, listener, [useCapture])
```
>Removes from the `IsometricCircle` (the SVG path element) an event listener previously registered with `addEventListener`

| Parameter       | Type          |
| --------------- | ------------- |
| type            | string        |
| callback        | VoidFunction  |
| callback        | boolean       |

</p>
</details>

<details><summary>Instance Properties</summary>
<p>

| Property        | Type     | Description                                                           |
| --------------- | -------- | --------------------------------------------------------------------- |
| radius          | number   | Gets and sets the radius of the isometric circle                      |
| planeView       | string   | Gets and sets the plane view in which the isometric circle is created |
| fillColor       | string   | Gets and sets the fill color of the isometric circle                  |
| fillOpacity     | number   | Gets and sets the fill opacity of the isometric circle                |
| strokeColor     | string   | Gets and sets the stroke color of the isometric circle                |
| strokeOpacity   | number   | Gets and sets the stroke opacity of the isometric circle              |
| strokeDashArray | number[] | Gets and sets the [SVG stroke dasharray][1] of the isometric circle   |
| strokeLinecap   | string   | Gets and sets the [SVG stroke linecap][2] of the isometric circle     |
| strokeLinejoin  | string   | Gets and sets the [SVG stroke linejoin][3] of the isometric circle    |
| strokeWidth     | number   | Gets and sets the stroke width of the isometric circle                |

</p>
</details>

---

[1]: https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray
[2]: https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-linecap
[3]: https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-linejoin
[4]: https://elchininet.github.io/isometric/#demo3