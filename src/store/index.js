if (process.env.NODE_ENV === 'production') {
  console.log('[PROD_ENV] do not use store with Redux DevTools');
  module.exports = require('./conf.prod');
} else {
  module.exports = require('./conf.dev');
}
