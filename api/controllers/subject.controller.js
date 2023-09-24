const BaseController = require('./base.controller');

class SubjectController extends BaseController {
  constructor({ SubjectService }) {
    super(SubjectService);
  }
}

module.exports = SubjectController;
