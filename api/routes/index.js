const { Router } = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');

module.exports = ({ UserRoutes }) => {
  const router = Router();
  const apiRoutes = Router();

  apiRoutes
    .use(cors())
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))
    .use(compression());

  apiRoutes.use('/user', UserRoutes);

  router.use('/api', apiRoutes);

  return router;
};
