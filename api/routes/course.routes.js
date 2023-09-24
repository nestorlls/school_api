const { Router } = require('express');

module.exports = ({ CourseController }) => {
  const router = Router();

  router.get('/', CourseController.getAll.bind(CourseController));
  router.get('/:id', CourseController.get.bind(CourseController));
  router.post('/', CourseController.create.bind(CourseController));
  router.put('/', CourseController.update.bind(CourseController));
  router.delete('/', CourseController.delete.bind(CourseController));

  return router;
};
