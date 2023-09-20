const { createContainer, asClass, asValue, asFunction } = require('awilix');

const StartUp = require('./startup');
const Server = require('./server');

// config
const config = require('../config/environments/index');

// controllers
const { UserController } = require('./controllers');

// services
const { UserService } = require('../services');

// repositories
const { UserRepository } = require('../dal/repositories');

const db = require('../dal/entities');

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
  UserController: asClass(UserController).singleton(),
});

container.register({
  UserRoutes: asFunction(userRoutes).singleton(),
});

container.register({
  UserService: asClass(UserService).singleton(),
});

container.register({
  UserRepository: asClass(UserRepository).singleton(),
});

container.register({
  db: asValue(db),
});

module.exports = container;
