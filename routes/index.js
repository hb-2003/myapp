var express = require('express');
var router = express.Router();
var index = require("../controller/index")
/* GET home page. */
router.get('/', index.index);
router.post('/', index.submit);
router.get('/leads/:id/', index.delete);
router.get('/leads/edit/:id/', index.edit);
router.post('/leads/update/:id/', index.update);

module.exports = router;
