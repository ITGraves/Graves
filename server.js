var express = require('express');
var app = express();
var path = require('path');

// 中间件

app.get('/', function(req, res) {
  res.end('just test');
});

app.listen('8086');