<p align="center">
    <a href="https://github.com/elchininet/isometric-css">
        <img src="./docs-src/src/images/isometric-css.png?raw=true" width="400" title="isometric" />
    </a>
    <br>
    A JavaScript library to build isometric projections using HTML elements and CSS classes
</p>

[![Build Status](https://travis-ci.com/elchininet/isometric-css.svg?branch=master)](https://travis-ci.com/elchininet/isometric-css) &nbsp; [![Coverage Status](https://coveralls.io/repos/github/elchininet/isometric-css/badge.svg?branch=master)](https://coveralls.io/github/elchininet/isometric-css?branch=master)

## Documentation / Demo

https://elchininet.github.io/isometric-css/

## Introduction

To give the apperance of an <a href="https://en.wikipedia.org/wiki/Isometric_projection" target="_blank" rel="noreferrer noopener">isometric projection</a> to an HTML element, it is needed to apply <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/transform" target="_blank" rel="noreferrer noopener">CSS transformations</a> to it. This transformations could be complex to manage, and even more when we have multiple elements and we want to translate them to specific isometric positions. The **isometric-css** library can help us in this task, it will create the necessary CSS rules to transform the HTML elements. You can either apply the transformation through declarative <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/data-*" target="_blank" rel="noreferrer noopener">data attributes</a> in the HTML code or use the library API methods to apply this transformations to the elements dynamically using JavaScript.