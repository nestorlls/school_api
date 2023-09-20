const { Router } = require('express');

module.exports = ({ UserController }) => {
  const router = Router();

  router.get('/', UserController.getUsers.bind(UserController));
  router.post('/', UserController.createUser.bind(UserController));

  return router;
};
