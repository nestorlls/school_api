class BaseError extends Error {
  constructor(textStatus, statusCode, isOperational, error) {
    super(error);
    this.textStatus = textStatus;
    this.codeStatus = statusCode;
    this.isOperational = isOperational;
    this.error = error;
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = BaseError;
