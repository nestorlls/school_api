const express = require('express');

class Server {
  constructor({ config, router }) {
    this._config = config;
    this._express = express();
    this._express.use(router);
  }

  start() {
    return new Promise((resolve) => {
      const http = this._express.listen(this._config.PORT, () => {
        const { port } = http.address();
        console.log(`Listening on port ${port}`);
        resolve();
      });
    });
  }
}

module.exports = Server;
