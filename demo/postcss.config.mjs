/** @type {import('postcss-load-config').Config} */

import postcssImport from 'postcss-import';
import postcssCalc from 'postcss-calc';
import postcssNested from 'postcss-nested';
import postcssMixins from 'postcss-mixins';
import postcssSimpleVars from 'postcss-simple-vars';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    postcssImport,
    postcssCalc,
    postcssNested,
    postcssMixins,
    postcssSimpleVars,
    autoprefixer
  ]
};