var mysql = require('mysql')
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
//var generalD = require('./Components/api/generalD.js');
var connection = mysql.createConnection({
  host:'localhost',
  user:'admiin',
  password:'root',
  database:'test'
});

connection.connect(function(err){
  if(err) throw err;
  else console.log("connected");
});


var router = express.Router();
app.use('/api', router);
app.use( bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

router.get('/applicants',function(req,res){
      var gDetails={ firstname, middlename};
      connection.query('INSERT INTO applicants SET ?',gDetails, function (error, results){
      if (error) throw error;
      else res.end(JSON.stringify(results));
      });
      res.json("success");
});

app.listen(8081);
console.log('Server running on port ');
