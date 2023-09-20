const { attributes } = require('structure');

const User = attributes({
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
})(class User {});

module.exports = User;
