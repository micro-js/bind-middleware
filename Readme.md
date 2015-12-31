
# wrap-redux-ware

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Convert redux middleware into a regular function that takes an &#x60;action&#x60;.

## Installation

    $ npm install @f/wrap-redux-ware

## Usage

```js
var wrapReduxWare = require('@f/wrap-redux-ware')

var logger = require('redux-logger')
var thunk = require('redux-thunk')

var dispatch = wrapReduxWare([
  thunk,
  logger()
])

dispatch(dispatch => {
  setTimeout(() => {
    dispatch({type: 'INCREMENT'})
  })
})

// log => {type: `INCREMENT`}

```

## API

### wrapReduxWare(middleware, ctx, next)

- `middleware` - array of redux middleware
- `ctx` - context to pass to middleware
- `next` - final next

**Returns:** A dispatch function with signature `dispatch(action)` that
dispatches to middleware stack.

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/wrap-redux-ware.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/wrap-redux-ware
[git-image]: https://img.shields.io/github/tag/micro-js/wrap-redux-ware.svg
[git-url]: https://github.com/micro-js/wrap-redux-ware
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/wrap-redux-ware.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/wrap-redux-ware
