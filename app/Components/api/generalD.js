var mysql=require('mysql');

hey=function(req,res){
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


  //var gDetails={firstname:'fdDS',middlename:'dshbd'};

connection.query('INSERT INTO applicants(firstname,middlename) VALUES("bdsad","djsh")', function (error, results){
if (error) throw error;
res.end(JSON.stringify(results));
});
};
module.exports = hey;
