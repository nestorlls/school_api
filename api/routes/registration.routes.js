const { Router } = require('express');

module.exports = ({ RegistrationController }) => {
  const router = Router();

  router.get('/', RegistrationController.getAll.bind(RegistrationController));
  router.get('/:id', RegistrationController.get.bind(RegistrationController));
  router.post('/', RegistrationController.create.bind(RegistrationController));
  router.put(
    '/:id',
    RegistrationController.update.bind(RegistrationController)
  );
  router.delete(
    '/:id',
    RegistrationController.delete.bind(RegistrationController)
  );

  return router;
};
