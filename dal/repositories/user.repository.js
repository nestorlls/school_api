class UserRepository {
  constructor({ db }) {
    this._db = db;
  }

  async createUser(user) {
    return this._db.user.create(user);
  }

  async getUsers() {
    return this._db.user.findAll();
  }
}

module.exports = UserRepository;
