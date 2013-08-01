var express = require('express')
  , path    = require('path')
  , home    = require('./routes/home.js');;

var app = express();

app.configure( function () {
  'use strict';
  app.set('view engine', 'jade');
  app.set('views', __dirname + '/views');
  app.use(require('stylus').middleware(__dirname + '/public'));
  app.use(express.logger('dev'));
  app.use(express.favicon());
  app.use(express.static(path.join(__dirname, 'public')));
});

app.get('/', home.index);
app.get('/contact', home.contact);


app.listen(3000);
