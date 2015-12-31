/**
 * Modules
 */

var isArray = require('@f/is-array')
var compose = require('@f/compose-redux-ware')
var clone = require('@f/clone-obj')

/**
 * Expose wrapReduxWare
 */

module.exports = wrapReduxWare['default'] = wrapReduxWare

/**
 * Convert redux middleware into a function that takes an `action`.
 * @param  {Array|Function} middleware Array of redux style middleware or single middleware.
 * @param  {Object} ctx Context to pass to each middleware.
 * @param  {Function} next Function to call last.
 * @return {Function} Dispatch
 */

function wrapReduxWare (middleware, ctx, next) {
  ctx = clone(ctx || {})
  middleware = isArray(middleware) ? compose(middleware) : middleware
  ctx.dispatch = dispatch
  ctx.dispatch = middleware(ctx)(next)
  return ctx.dispatch

  function dispatch (action) {
    return ctx.dispatch(action)
  }
}
