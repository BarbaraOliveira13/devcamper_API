const express = require('express');
const dotenv = require('dotenv');

// routes fils in variable
const bootcamps = require('./routes/bootcamps');

dotenv.config({ path: './config/config.env'});

const app = express();

// mount routers
app.use('/api/vi/bootcamps', bootcamps);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
