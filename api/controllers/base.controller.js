const { NotFoundError, BadRequestError } = require('../errors');
const { parseInt } = require('../utils');
const HTTP_STATUS_CODES = require('../httpStatusCodes');

class BaseController {
  constructor(EntityService) {
    this._entityService = EntityService;
  }

  async getAll(req, res) {
    try {
      const entities = await this._entityService.getAll();
      return res.status(HTTP_STATUS_CODES.OK).send({ payload: entities });
    } catch (error) {
      return res.send(error);
    }
  }

  async get(req, res) {
    try {
      const { id } = req.params;

      if (!parseInt(id)) throw new BadRequestError(`Invalid id: ${id}`);

      let entity = await this._entityService.get(id);

      if (!entity) throw new NotFoundError(`Entity with id ${id} not found`);

      return res.status(HTTP_STATUS_CODES.OK).send({ payload: entity });
    } catch (error) {
      return res.status(error.codeStatus).send(error);
    }
  }

  async create(req, res) {
    try {
      const body = req.body;

      const createdEntity = await this._entityService.create(body);

      return res
        .status(HTTP_STATUS_CODES.CREATED)
        .send({ payload: createdEntity });
    } catch (error) {
      return res.status(error.codeStatus).send(error);
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!parseInt(id)) throw new BadRequestError(`Invalid id: ${id}`);

      const body = req.body;

      const updatedEntity = await this._entityService.update(id, body);

      if (updatedEntity[0] === 0)
        throw new NotFoundError(`Entity with id ${id} not found`);

      if (updatedEntity[0] === 1) {
        const entity = await this._entityService.get(id);
        return res.status(HTTP_STATUS_CODES.OK).send({ payload: entity });
      }
    } catch (error) {
      return res.status(error.codeStatus).send(error);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!parseInt(id)) throw new BadRequestError(`Invalid id: ${id}`);

      const deletedEntity = await this._entityService.delete(id);

      if (deletedEntity === 0)
        throw new NotFoundError(`Entity with id ${id} not found`);

      return res.status(HTTP_STATUS_CODES.NO_CONTENT).send();
    } catch (error) {
      return res.status(error.codeStatus).send(error);
    }
  }
}

module.exports = BaseController;
