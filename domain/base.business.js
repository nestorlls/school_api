const mapper = require('automapper-js');

class BaseBusiness {
  constructor(EntityRepository, entityToMap) {
    this._entityRepository = EntityRepository;
    this._entityToMap = entityToMap;
  }

  async getAll() {
    const entities = await this._entityRepository.getAll();
    return entities.map((entity) => mapper(this._entityToMap, entity.toJSON()));
  }

  async get(id) {
    const entity = await this._entityRepository.get(id);
    if (!entity) return null;
    return mapper(this._entityToMap, entity.toJSON());
  }

  async create(entity) {
    entity = mapper(this._entityToMap, entity);
    const createdEntity = await this._entityRepository.create(entity);
    return mapper(this._entityToMap, createdEntity.toJSON());
  }

  async update(id, entity) {
    entity.id = id;
    entity = mapper(this._entityToMap, entity);
    const updatedEntity = await this._entityRepository.update(id, entity);
    return mapper(this._entityToMap, updatedEntity);
  }

  async delete(id) {
    return await this._entityRepository.delete(id);
  }
}

module.exports = BaseBusiness;
