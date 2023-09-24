const BaseController = require('./base.controller');

class StudentController extends BaseController {
  constructor({ StudentService }) {
    super(StudentService);
  }
}

module.exports = StudentController;
