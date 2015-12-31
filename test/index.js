/**
 * Imports
 */

var compose = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work wrap middleware', t => {
  var dispatch = compose([
    ctx => next => action => next(action + 1),
    ctx => next => action => action === 2 ? ctx.dispatch(action) : next(action),
    ctx => next => action => next(action + 1)
  ])
  t.equal(dispatch(1), 4)
  t.end()
})

test('should pass ctx', t => {
  var dispatch = compose([
    ctx => next => action => next(action + ctx.addend),
    ctx => next => action => next(action + ctx.addend)
  ], {addend: 2})

  t.equal(dispatch(2), 6)
  t.end()
})

test('should pass ctx and finalize', t => {
  var dispatch = compose([
    ctx => next => action => next(action + ctx.addend),
    ctx => next => action => next(action + ctx.addend)
  ], {addend: 2}, function (action) {
    return action + 3
  })

  t.equal(dispatch(2), 9)
  t.end()
})
