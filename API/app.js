require('dotenv').config();
const debug = require('debug')("App");
const express = require('express');

const app = express();

app.use(express.json()) // Body parser

// Setting session system
const session = require('express-session');
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false, maxAge:null  }
}));

// Setting CORS
const cors = require('cors');
const corsOptions = {
  origin: '*',
  optionSucessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));

const router = require('./src/router/');
app.use('/v1', router); // Prefixing API routes and using router

const { HOST, PORT } = process.env;
app.listen(PORT, () => {
  debug(`Listening on http://${HOST}:${PORT}`)
});
