const container = require('./api/container');

const app = container.resolve('app');
const db = container.resolve('db');

app
  .start()
  .then(async () => {
    const response = await db.sequelize.sync();

    if (response) {
      console.log('db synced');
      console.log('app started');
    }
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
