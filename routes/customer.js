var utils = require('util')
  , db    = require('./../db.js');

exports.index = function (req, res) {
  'use strict';
  res.render('customer/index', { title: 'Customer List', customers: db.listCustomers()});
};

exports.create = function (req, res) {
  'use strict';
  res.render('customer/create');
};
