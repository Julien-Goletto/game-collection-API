require('dotenv').config();
const debug = require('debug')("App");
const express = require('express');

const app = express();

const router = require('./src/router/');
app
  .use(express.json()) // Body parser
  .use('/v1', router); // Prefixing API routes and using router

// Setting session system
const session = require('express-session');
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true, maxAge:null  }
}));

// Setting CORS
const cors = require('cors');
const corsOptions = {
  origin: '*',
  optionSucessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));

const { HOST, PORT } = process.env;
app.listen(PORT, () => {
  debug(`Listening on http://${HOST}:${PORT}`)
});
