var express = require('express')
var app = express()
var bodyParser = require('body-parser')
const router = require('./router')
var cors = require('cors')

const port = 8081;

app.use(cors());
app.use( bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true }));
router(app);

app.listen(port);
console.log('Server running on port '+port);
