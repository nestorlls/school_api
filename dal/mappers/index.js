const toDbEntity = (user) => {
  const { id, name, lastname } = user;

  return {
    id,
    name,
    lastname,
  };
};

module.exports = {
  toDbEntity,
};
