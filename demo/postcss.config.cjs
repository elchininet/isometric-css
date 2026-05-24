/** @type {import('postcss-load-config').Config} */

module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-calc'),
    require('postcss-nested'),
    require('postcss-mixins'),
    require('postcss-simple-vars'),
    require('autoprefixer')
  ]
};