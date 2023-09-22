class BaseBusiness {
  constructor(EntityRepository) {
    this._entityRepository = EntityRepository;
  }

  async getAll() {
    return await this._entityRepository.getAll();
  }

  async get(id) {
    return await this._entityRepository.get(id);
  }

  async create(entity) {
    return await this._entityRepository.create(entity);
  }

  async update(id, entity) {
    entity.id = id;
    return await this._entityRepository.update(id, entity);
  }

  async delete(id) {
    return await this._entityRepository.delete(id);
  }
}

module.exports = BaseBusiness;
