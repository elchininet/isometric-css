# Changelog

## [3.0.0] - 2026-03-30

- Migrated to `TypeScript 6`, so the target of the library is now `es6` instead of the previous `es5`
- Removed the export of the project constants, in this version, only VIEW and AXIS are exported publicly
- Some refactors have been needed to make the project compatible with `TypeScript 6` but they should not affect the functionality of the plugin

## [2.2.3] - 2021-06-06

- Fix a bug related to data animation properties parser
- Fix a bug related to parent rotation storing when using JavaScript methods

## [2.2.2] - 2021-05-28

- Fix a bug with animation positions with negative values

## [2.2.1] - 2021-05-27

- Fix a bug animation elements already positioned

## [2.2.0] - 2021-05-27

- Add support for animating positions

## [2.1.2] - 2021-04-27

- Removed @emotion/hash dependency

## [2.1.1] - 2021-03-21

- Fix error using the library directly from the browser

## [2.1.0] - 2021-03-19

- Implemented the rotation of groups containing planes

## [2.0.0] - 2021-02-10

- Breaking change: The library has been rewritten completely
- Remove jss and jss-plugin-camel-case as dependencies, the styles are managed by the library itself
- The transformations are applied using matrix tranformation instead of skew and rotate tranformations
- It is possible to rotate planes

## [1.0.2] - 2021-01-28

- Remove a position or a background class if a new one is added

## [1.0.0 - 1.0.1] - 2021-01-28

- isometric-css has been released