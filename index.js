var express = require('express')
  , path    = require('path')
  , home    = require('./routes/home.js')
  , customer= require('./routes/customer.js');

var app = express();

app.configure( function () {
  'use strict';
  app.set('view engine', 'jade');
  app.set('views', __dirname + '/views');
  app.use(express.bodyParser());
  app.use(require('stylus').middleware(__dirname + '/public'));
  app.use(express.logger('dev'));
  app.use(express.favicon());
  app.use(express.static(path.join(__dirname, 'public')));
});

app.get('/', home.index);
app.get('/contact', home.contact);
app.get('/customer', customer.index);
app.get('/customer/create', customer.create);
app.get('/customer/details/:id', customer.details);
app.post('/customer/create', customer.createCustomer);

app.listen(3000);
