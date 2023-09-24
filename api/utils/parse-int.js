module.exports = (id) => {
  const regex = /^[0-9]*$/;
  return regex.test(id) ? parseInt(id) : false;
};
