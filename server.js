var express = require('express');
var app = express();
var mysql = require("mysql");
var bodyParser = require("body-parser");
var config = mysql.createConnection({
  host: "127.0.0.1",//127.0.0.1
  user: "root",
  password: "1738art",
  database: "younglings"
});

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
  res.sendFile('C:/Users/Arthu/OneDrive/Desktop/IT Younglings/mySQL/login.html');
});

app.get('/home', function (req, res) {
  res.sendFile('C:/Users/Arthu/OneDrive/Desktop/IT Younglings/mySQL/home.html');
});

app.get('/editPage', function (req, res) {
  res.sendFile('C:/Users/Arthu/OneDrive/Desktop/IT Younglings/mySQL/edit.html');
});

app.get('/addPage', function (req, res) {
  res.sendFile('C:/Users/Arthu/OneDrive/Desktop/IT Younglings/mySQL/about.html');
});

app.post('/login', function(req, res, next) {
    config.connect(function(err) {
      if (err) throw err;
      config.query(`SELECT id FROM users WHERE id = ${req.body.pswd} AND name = "${req.body.name}"`, function (err, result, fields) {
        if (err) throw res.send('<body style="backgroundcolor:red"><h1 style="color:white">Username or Password incorrect</h1></body>')
        else res.sendFile('C:/Users/Arthu/OneDrive/Desktop/IT Younglings/mySQL/home.html');
      });
    });
});

app.get('/display', function(req, res, next) {
  config.connect(function(err) {
    if (err) throw err;
    config.query(`SELECT * FROM users`, function (err, rows) {
      if(err) throw err;

      console.log('Data received from Db:');
      console.log(rows);
      rows.forEach( (row) => {
        res.send(`<li><ol style="background-color:black"><center><h1 style="color:white">Username: ${row.name} <br>  Job-title: ${row.position}<h1></center></ol></li>`)
      });
      
    });
  });
});

app.post('/add', function(req, res, next) {
  config.connect(function(err) {
    if (err) throw err;
    config.query(`SELECT * FROM users WHERE id = ${req.body.login1}`, function (err, result, fields) {
      if (err) throw err;
      res.json(result);
    });
  });
});

app.post('/delete', function(req, res, next) {
  config.connect(function(err) {
    if (err) throw err;
    config.query(`SELECT * FROM users WHERE id = ${req.body.login1}`, function (err, result, fields) {
      if (err) throw err;
      res.json(result);
    });
  });
});

app.post('/x', function(req, res, next) {
  config.connect(function(err) {
    if (err) throw err;
    config.query(`SELECT * FROM users WHERE id = ${req.body.login1}`, function (err, result, fields) {
      if (err) throw err;
      res.json(result);
    });
  });
});

var server = app.listen(5000, function () {
    console.log('Node server is running..');
});