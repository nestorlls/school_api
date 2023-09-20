const { createContainer, asClass, asValue, asFunction } = require('awilix');

const StartUp = require('./startup');
const Server = require('./server');

// config
const config = require('../config/environments/index');

// controllers
const { UserController } = require('./controllers');

// routes
const Routes = require('./routes/index');
const userRoutes = require('./routes/user.routes');

const container = createContainer();

container.register({
  app: asClass(StartUp).singleton(),
  server: asClass(Server).singleton(),
  config: asValue(config),
  router: asFunction(Routes).singleton(),
});

container.register({
  UserController: asClass(UserController.bind(UserController)).singleton(),
});

container.register({
  UserRoutes: asFunction(userRoutes).singleton(),
});

module.exports = container;
