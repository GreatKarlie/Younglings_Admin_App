var fs = require('fs');
var mysql = require('mysql');
var express = require('express');
var app = express();
var path = require('path');
var open = require('open');
var port = 8080;

app.use(express.static('public'));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/', function(request, respond) {
    fs.writeFile('message.txt', 'Hello Node.js', (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
});

app.listen(port, function(err){
    if(err){
        console.log(err);
    }else{
        open('http://localhost:' + port);
    }
});


var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "1738art",
  database: "Younglings"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO users (name, surname, admin, position) VALUES ()";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
});