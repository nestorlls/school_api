const BaseError = require('./base.error');
const HTTP_STATUS_CODES = require('../httpStatusCodes');

class NotFoundError extends BaseError {
  constructor(
    textStatus,
    codeStatus = HTTP_STATUS_CODES.NOT_FOUND,
    error = 'Not Found',
    isOperational = true
  ) {
    super(textStatus, codeStatus, isOperational, error);
  }
}

module.exports = NotFoundError;
