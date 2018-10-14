var express = require('express');
var app = express();

let user = {
    name: "Шакир Бабутов",
    avatarUrl: "https://pp.userapi.com/c831209/v831209787/1a1d22/-4m4mudhO7E.jpg?ava=1"
}

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/user', function (req, res) {
    res.send(JSON.stringify(user));
  });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
}); 