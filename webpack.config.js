'use strict'

module.exports = (env = {}) => {
  if (env.prod) {
    return require('./config/webpack.prod.js')(env)
  } else {
    return require('./config/webpack.dev.js')(env)
  }
}
