const express = require('express');
const app = express();

const router = require('./server/router')

app.use('/', router);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
}); 