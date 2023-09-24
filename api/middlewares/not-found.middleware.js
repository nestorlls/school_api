const HTTP_STATUS_CODES = require('../httpStatusCodes');

module.exports = (req, res, next) => {
  return res.status(HTTP_STATUS_CODES.NOT_FOUND).send({
    status: HTTP_STATUS_CODES.NOT_FOUND,
    message: 'Resource not found',
  });
};
