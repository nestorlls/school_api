const BaseController = require('./base.controller');

class SectionController extends BaseController {
  constructor({ SectionService }) {
    super(SectionService);
  }
}

module.exports = SectionController;
