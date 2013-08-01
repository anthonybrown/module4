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

exports.details = function (req, res) {
  'use strict';
  var customer = db.getCustomerById(req.params.id);
  res.render('customer/details', { customer: customer });
};

exports.edit = function (req, res) {
  'use strict';
  var customer = db.getCustomerById(req.params.id);
  res.render('customer/edit', { customer: customer });
};

exports.editCustomer = function (req, res) {
  'use strict';
  db.updateCustomer({id: req.params.id, name: req.body.name, email:req.body.email, telephone:req.body.telephone});
  res.redirect('/customer');
};

exports.delete = function(req, res) {
  'use strict';
  db.deleteCustomer(req.params.id);
  res.redirect('/customer');
}








