if(process.env.NODE_ENV = 'production') {
  module.export = require('dist/largr-number.min.js')
} else {
  module.exports = require('dist/large-number.js')
}