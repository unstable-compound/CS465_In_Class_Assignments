var path = require('path');
var express = require('express');

var app = express();
console.log("Express app initialized");

app.use(express.static("public"));

app.use(express.urlencoded({ extended: false }));
const PORT = 8080





//main route fget request/....
app.get('/', function(req,res){
  console.log("index page");

  res.sendFile(path.join(__dirname, 'index.html'))
});



app.post('/submit', function (req, res) {
  console.log("submit page");
  //res.send(req.body);

  let name = 'Name: ' + req.body.name;
  let email = 'Email: ' + req.body.email;
  let message = 'Comment: ' + req.body.message;

  res.write(name + '\r\n');   
  res.write(email + '\r\n');
  res.write(message + '\r\n');
 
  res.end();
 });

app.listen(PORT);