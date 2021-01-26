<p align="center">
    <a href="https://github.com/elchininet/isometric-css">
        <img src="./docs-src/images/isometric-css.png?raw=true" width="400" title="isometric" />
    </a>
    <br>
    A JavaScript library to build isometric projections using CSS classes
</p>

## Demo / Tutorial

https://elchininet.github.io/isometric-css/

## Installation

#### Using NPM

```
npm install isometric-css --save
```

#### Using Yarn

```
yarn add isometric-css
```

#### In the browser

It is possible to use the library directly in the browser:

1. Copy the JavaScript file `browser.js`, located in the `dist` folder
2. Put it in the folder that you prefer in your web server
3. Include it in your HTML file

```javascript
<script src="wherever/you/installed/browser.js" />
```

#### Importing using CommonJS

```javascript
// Importing the library to work with the isometric classes
const { Isometric, IsometricCSS } = require('isometric-css');

// Use the library in the browser
require('isometric-css/browser');
```

#### Importing using ES6 modules

```javascript
// Importing the library to work with the isometric classes
import { Isometric, IsometricCSS } from 'isometric-css';

// Use the library in the browser
import 'isometric-css/browser';
```

#### Using in the browser

```javascript
/* Use it directly in your JavaScript code */
Isometric;

/* Or access to the global variable if there is a variable with this name in the same scope */
window.Isometric;
```

## Scripts

#### build

`npm run build`

Transpiles the TypeScript code and creates two bundles in the `dist` folder (`index.js` for Node environments and `browser.js` to use directly in the browser).