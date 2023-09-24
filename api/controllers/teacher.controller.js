const BaseController = require('./base.controller');

class TeacherController extends BaseController {
  constructor({ TeacherService }) {
    super(TeacherService);
  }
}

module.exports = TeacherController;
