const container = require('./api/container');

const app = container.resolve('app');
const db = container.resolve('db');

app
  .start()
  .then(async () => {
    console.log('app started');

    await db.sequelize.sync();
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
