var express = require('express');
var app = express();
var path = require('path');
var ejs = require('ejs');
var bodyParser = require('body-parser');
var router = express.Router();

// 中间件

// 使用模版引擎
app.engine('html', ejs.__express);
app.set('view engine','html');

// parse body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.render(path.resolve(__dirname, 'src/views/index'));
});

app.get('/test', function(req, res) {
  res.end('我是你爹');
});

app.listen('8086');