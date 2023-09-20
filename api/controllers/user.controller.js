class UserController {
  constructor({ UserService }) {
    this._userService = UserService;
  }

  async createUser(req, res) {
    const body = req.body;
    const createdUser = await this._userService.createUser(body);
    return res.send({ error: false, payload: createdUser });
  }

  async getUsers(req, res) {
    const users = await this._userService.getUsers();
    return res.send({ error: false, payload: users });
  }
}

module.exports = UserController;
