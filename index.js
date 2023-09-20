const container = require('./api/container');

const app = container.resolve('app');

app
  .start()
  .then(() => {
    console.log('app started');
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
