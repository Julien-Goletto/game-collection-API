require('dotenv').config();
const debug = require('debug')("App");
const express = require('express');
const cors = require('cors');

const { HOST, PORT } = process.env;
const app = express();
const router = require('./src/router/');

app
  .use(express.json())
  .use('/v1', router);

app.listen(PORT, () => {
  debug(`Listening on http://${HOST}:${PORT}`)
});
