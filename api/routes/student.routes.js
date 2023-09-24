const { Router } = require('express');

module.exports = ({ StudentController }) => {
  const router = Router();

  router.get('/', StudentController.getAll.bind(StudentController));
  router.get('/:id', StudentController.get.bind(StudentController));
  router.post('/', StudentController.create.bind(StudentController));
  router.put('/:id', StudentController.update.bind(StudentController));
  router.delete('/:id', StudentController.delete.bind(StudentController));

  return router;
};
