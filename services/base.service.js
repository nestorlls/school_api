class BaseService {
  constructor(EntityBusiness) {
    this._entityBusiness = EntityBusiness;
  }

  async getAll() {
    return await this._entityBusiness.getAll();
  }

  async get(id) {
    return await this._entityBusiness.get(id);
  }

  async create(entity) {
    return await this._entityBusiness.create(entity);
  }

  async update(id, entity) {
    return await this._entityBusiness.update(id, entity);
  }

  async delete(id) {
    return await this._entityBusiness.delete(id);
  }
}

module.exports = BaseService;
