const { toDbEntity } = require('../dal/mappers');
const { toDomainEntity } = require('../domain/mappers');

class UserService {
  constructor({ UserRepository }) {
    this._userRepository = UserRepository;
  }

  async createUser(user) {
    user = toDbEntity(user);
    const createdUser = await this._userRepository.createUser(user);
    return createdUser;
  }

  async getUsers() {
    const users = await this._userRepository.getUsers();
    return users.map(toDomainEntity);
  }
}

module.exports = UserService;
