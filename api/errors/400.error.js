const BaseError = require('./base.error');
const HTTP_STATUS_CODES = require('../httpStatusCodes');

class BadRequestError extends BaseError {
  constructor(
    textStatus,
    codeStatus = HTTP_STATUS_CODES.BAD_REQUEST,
    error = 'Bad Request',
    isOperational = true
  ) {
    super(textStatus, codeStatus, isOperational, error);
  }
}

module.exports = BadRequestError;
