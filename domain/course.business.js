const BaseBusiness = require('./base.business');

class CourseBusiness extends BaseBusiness {
  constructor({ CourseRepository }) {
    super(CourseRepository);
  }
}

module.exports = CourseBusiness;
