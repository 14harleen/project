var mysql= require('mysql');
exports.insert = function(req, res, next) {

  var connection = mysql.createConnection({
    host:'localhost',
    user:'admiin',
    password:'root',
    database: 'test',
  });
  connection.connect(function(err){
    if (err) throw err;
    else console.log("Connection successful");
  });

  var gDetails=req.body;

  var pincodeC = req.body.pin_C;
  var pincoderegex = new RegExp(/[0-9]{4,6}/);
  var pincodeP = req.body.pin_P;
  var res1 = pincoderegex.test(pincodeC);
  var res2 = pincoderegex.test(pincodeP);
  console.log(res1, res2);
  if(res2===false || res1 === false){
    console.log('fail');
  }
  else{
    connection.query('INSERT INTO applicants SET ?',gDetails, function (error, results){
    if (error) throw error;
    else res.send(JSON.stringify(results));
    });
  }
}
