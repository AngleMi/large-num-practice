if(process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/larger-number.min.js')
} else {
  module.exports = require('./dist/larger-number.js')
}