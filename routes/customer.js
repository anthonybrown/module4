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

exports.createCustomer = function (req, res) {
  'use strict';
  db.addCustomer({name: req.body.name, email:req.body.email, telephone: req.body.telephone});

  res.redirect('/customer');
};
