var customerDb = {},
    id_inc     = 0;
exports.listCustomers = function () {
  'use strict';
  return customerDb;
};

exports.addCustomer = function (customer) {
  'use strict';
  id_inc = id_inc + 1;
  customer.id = id_inc;
  customerDb[customer.id] = customer;
};

exports.getCustomerById = function (id) {
  'use strict';
  return customerDb[id];
};

exports.deleteCustomer = function (id) {
  'use strict';
  customerDb[id].remove();
};

exports.updateCustomer = function (customer) {
  'use strict';
  customerDb[customer.id] = customer;
};


exports.picture = function (req, res) {
  'use strict';
   var customer = db.getCustomerById(req.params.id);
   if (req.query.attachment === 'true') {
    res.download(customer.picture);
   } else {
    res.sendfile(customer.picture);
   }
};
