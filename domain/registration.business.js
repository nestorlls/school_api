const BaseBusiness = require('./base.business');

class RegistrationBusiness extends BaseBusiness {
  constructor({ RegistrationRepository }) {
    super(RegistrationRepository);
  }
}

module.exports = RegistrationBusiness;
