const BaseController = require('./base.controller');

class RegistrationController extends BaseController {
  constructor({ RegistrationService }) {
    super(RegistrationService);
  }
}

module.exports = RegistrationController;
