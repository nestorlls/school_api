const { Router } = require('express');

module.exports = ({ UserController }) => {
  const router = Router();

  router.get('/', UserController.sayHello);

  return router;
};
