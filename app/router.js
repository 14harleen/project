const express = require('express');
const applicants = require('./Controller/applicants');

module.exports = function(app) {
  const route = express.Router();
  app.use('/api', route);
  route.post('/insert', applicants.insert);
}
