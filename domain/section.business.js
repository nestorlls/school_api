const BaseBusiness = require('./base.business');

class SectionBusiness extends BaseBusiness {
  constructor({ SectionRepository }) {
    super(SectionRepository);
  }
}

module.exports = SectionBusiness;
