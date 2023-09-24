const { Router } = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');

const { NotFoundMiddleware, ErrorMiddleware } = require('../middlewares');

module.exports = ({
  TeacherRoutes,
  StudentRoutes,
  CourseRoutes,
  SectionRoutes,
  SubjectRoutes,
  RegistrationRoutes,
}) => {
  const router = Router();
  const apiRoutes = Router();

  apiRoutes
    .use(cors())
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))
    .use(compression());

  apiRoutes.use('/teachers', TeacherRoutes);
  apiRoutes.use('/students', StudentRoutes);
  apiRoutes.use('/courses', CourseRoutes);
  apiRoutes.use('/sections', SectionRoutes);
  apiRoutes.use('/subjects', SubjectRoutes);
  apiRoutes.use('/registrations', RegistrationRoutes);

  router.use('/api', apiRoutes);

  router.use(NotFoundMiddleware);
  router.use(ErrorMiddleware);

  return router;
};
