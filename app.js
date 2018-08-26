const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const provider = require('./routes/providers');
const specialties = require('./routes/specialties');
const app = express();

mongoose.connect(
  'mongodb://foundation123:foundation123@ds125146.mlab.com:25146/foundation-test1'
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/provider', provider);
app.use('/specialties', specialties);

app.listen(8080, () => console.log('Server running... port 8080'));
