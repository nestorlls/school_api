const HTTP_STATUS_CODES = require('../httpStatusCodes');

module.exports = (error, req, res, next) => {
  const status = error.status || HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR;
  const message = error.message || 'Internal Server Error';
  res.status(status).send({ status, message });
};
