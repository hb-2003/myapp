exports.index = function(req, res, next) {
    res.render('index', { title: 'Express' });
  };

exports.submit = function(req, res, next) {
   console.log(req.body.email);
   res.render('index', { title: 'Express' });
  };