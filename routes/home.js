exports.index = function (req, res) {
  'use strict';
  res.render('home/index', { title: 'Home made', firstParagraph:'Express app running here.'});
};

exports.contact = function (req, res) {
  'use strict';
  res.render('home/contact', {email:"mail@hadihariri.com", telephone:'1-800-EXPRESS'});
};
