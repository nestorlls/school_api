const BaseBusiness = require('./base.business');

class StudentBusiness extends BaseBusiness {
  constructor({ StudentRepository }) {
    super(StudentRepository);
  }
}

module.exports = StudentBusiness;
