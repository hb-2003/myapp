var models = require('../models');

exports.index = function(req, res, next) {

  console.log(models.Lead);
   models.Lead.findAll().then(leads => {
     res.render('index', { title: 'Express', leads: leads });
   });
};

exports.submit = async function(req, res, next) {
    console.log(req.body.email);
    const email = req.body.email;

    const newLead = await models.Lead.create({
      email: email,
    });

    if (newLead) {
      res.redirect('/');
    }

    // res.render('index', { title: 'Express' });
};


exports.delete = async function(req, res, next) {
  console.log(req.params.id);
  const id = req.params.id;
  const lead = await models.Lead.findByPk(id);

  if (lead) {
    await lead.destroy();
  };
  res.redirect('/');
};

exports.edit = async function(req, res, next) {
  console.log(req.params.id);
  const id = req.params.id;
  const lead = await models.Lead.findByPk(id);
  res.render('edit', {  lead: lead });
};

exports.update = async function(req, res, next) {
  console.log(req.params.id);
  const id = req.params.id;
  const lead = await models.Lead.findByPk(id);
  if (lead) {
    lead.email = req.body.email;
    await lead.save();
  };
  res.redirect('/');
};
