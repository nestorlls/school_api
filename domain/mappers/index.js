const User = require('../user.domain');

const toDomainEntity = (user) => {
  const { id, name, lastname } = user;

  return new User({
    id,
    name,
    lastname,
  });
};

module.exports = {
  toDomainEntity,
};
