const { createContainer, asClass, asValue, asFunction } = require('awilix');

const StartUp = require('./startup');
const Server = require('./server');

// config
const config = require('../config/environments/index');

// routes
const Routes = require('./routes/index');
const {
  TeacherRoutes,
  StudentRoutes,
  CourseRoutes,
  SectionRoutes,
  SubjectRoutes,
  RegistrationRoutes,
} = require('./routes/index.routes');

// controllers
const {
  TeacherController,
  StudentController,
  CourseController,
  RegistrationController,
  SectionController,
  SubjectController,
} = require('./controllers');

// services
const {
  TeacherService,
  StudentService,
  CourseService,
  RegistrationService,
  SectionService,
  SubjectService,
} = require('../services');
// business

const {
  TeacherBusiness,
  StudentBusiness,
  CourseBusiness,
  RegistrationBusiness,
  SectionBusiness,
  SubjectBusiness,
} = require('../domain');

// repositories
const {
  TeacherRepository,
  StudentRepository,
  CourseRepository,
  RegistrationRepository,
  SectionRepository,
  SubjectRepository,
} = require('../dal/repositories');

// db
const db = require('../dal/models/index');

const container = createContainer();

container.register({
  app: asClass(StartUp).singleton(),
  server: asClass(Server).singleton(),
  config: asValue(config),
  router: asFunction(Routes).singleton(),
});

container.register({
  TeacherRoutes: asFunction(TeacherRoutes).singleton(),
  StudentRoutes: asFunction(StudentRoutes).singleton(),
  CourseRoutes: asFunction(CourseRoutes).singleton(),
  SectionRoutes: asFunction(SectionRoutes).singleton(),
  SubjectRoutes: asFunction(SubjectRoutes).singleton(),
  RegistrationRoutes: asFunction(RegistrationRoutes).singleton(),
});

container.register({
  TeacherController: asClass(TeacherController).singleton(),
  StudentController: asClass(StudentController).singleton(),
  CourseController: asClass(CourseController).singleton(),
  SectionController: asClass(SectionController).singleton(),
  SubjectController: asClass(SubjectController).singleton(),
  RegistrationController: asClass(RegistrationController).singleton(),
});

container.register({
  TeacherService: asClass(TeacherService).singleton(),
  StudentService: asClass(StudentService).singleton(),
  CourseService: asClass(CourseService).singleton(),
  SectionService: asClass(SectionService).singleton(),
  SubjectService: asClass(SubjectService).singleton(),
  RegistrationService: asClass(RegistrationService).singleton(),
});

container.register({
  TeacherBusiness: asClass(TeacherBusiness).singleton(),
  StudentBusiness: asClass(StudentBusiness).singleton(),
  CourseBusiness: asClass(CourseBusiness).singleton(),
  SectionBusiness: asClass(SectionBusiness).singleton(),
  SubjectBusiness: asClass(SubjectBusiness).singleton(),
  RegistrationBusiness: asClass(RegistrationBusiness).singleton(),
});

container.register({
  TeacherRepository: asClass(TeacherRepository).singleton(),
  StudentRepository: asClass(StudentRepository).singleton(),
  CourseRepository: asClass(CourseRepository).singleton(),
  SectionRepository: asClass(SectionRepository).singleton(),
  SubjectRepository: asClass(SubjectRepository).singleton(),
  RegistrationRepository: asClass(RegistrationRepository).singleton(),
});

container.register({
  db: asValue(db),
});

module.exports = container;
