const BaseBusiness = require('./base.business');

class SubjectBusiness extends BaseBusiness {
  constructor({ SubjectRepository }) {
    super(SubjectRepository);
  }
}

module.exports = SubjectBusiness;
