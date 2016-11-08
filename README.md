# trailpack-intercom

[![NPM version][npm-image]][npm-url]
[![Build status][ci-image]][ci-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Code Climate][codeclimate-image]][codeclimate-url]

## Trailpack for Intercom
This Trailpack provides the [intercom-node](https://github.com/intercom/intercom-node) api as a trails service.

## Install

```sh
$ npm install --save trailpack-intercom
```
With yo
```sh
$ yo trails:trailpack trailpack-intercom
```

## Configure

```js
// config/main.js
module.exports = {
  packs: [
    // ... other trailpacks
    require('trailpack-intercom')
  ]
}
```

## Examples

[npm-image]: https://img.shields.io/npm/v/trailpack-intercom.svg?style=flat-square
[npm-url]: https://npmjs.org/package/trailpack-intercom
[ci-image]: https://img.shields.io/travis/scott-wyatt/trailpack-intercom/master.svg?style=flat-square
[ci-url]: https://travis-ci.org/scott-wyatt/trailpack-intercom
[daviddm-image]: http://img.shields.io/david/scott-wyatt/trailpack-intercom.svg?style=flat-square
[daviddm-url]: https://david-dm.org/scott-wyatt/trailpack-intercom
[codeclimate-image]: https://img.shields.io/codeclimate/github/scott-wyatt/trailpack-intercom.svg?style=flat-square
[codeclimate-url]: https://codeclimate.com/github/scott-wyatt/trailpack-intercom

