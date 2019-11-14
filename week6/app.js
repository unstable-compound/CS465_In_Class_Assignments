var path = require('path');
var express = require('express');
var app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join()));

app.post('/submit', function (req, res) {
  console.log(req.body);
  res.send(req.body);
});

app.listen(5000);