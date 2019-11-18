var path = require('path');
var express = require('express');
var app = express();
app.use(express.static("public"));

app.use(express.urlencoded({ extended: false }));
const PORT = 8080





//main route fget request/....
app.get("/", function(req,res){
  console.log("index page");

  //res.sendFile(path.join(__dirname, ))
}


app.post('/submit', function (req, res) {
  console.log("submit page");
  res.send(req.body);
});

app.listen(PORT);