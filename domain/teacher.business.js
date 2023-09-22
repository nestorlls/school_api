const BaseBusiness = require('./base.business');

class TeacherBusiness extends BaseBusiness {
  constructor({ TeacherRepository }) {
    super(TeacherRepository);
  }
}

module.exports = TeacherBusiness;
