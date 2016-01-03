
# bind-middleware

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Bind middleware to a context with a dispatch and optionally a next function, so that
actions can be dispatched to the middleware stack.

## Installation

    $ npm install @f/bind-middleware

## Usage

```js
var bindMiddleware = require('@f/bind-middleware')

var logger = require('redux-logger')
var thunk = require('redux-thunk')

var dispatch = bindMiddleware([
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

### bindMiddleware(middleware, ctx, next)

- `middleware` - array of redux middleware
- `ctx` - context to pass to middleware
- `next` - final next

**Returns:** A dispatch function with signature `dispatch(action)` that
dispatches to middleware stack.

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/bind-middleware.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/bind-middleware
[git-image]: https://img.shields.io/github/tag/micro-js/bind-middleware.svg
[git-url]: https://github.com/micro-js/bind-middleware
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/bind-middleware.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/bind-middleware
