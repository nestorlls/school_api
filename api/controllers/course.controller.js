const BaseController = require('./base.controller');

class CourseController extends BaseController {
  constructor({ CourseService }) {
    super(CourseService);
  }
}

module.exports = CourseController;
