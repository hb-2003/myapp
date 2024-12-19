var express = require('express');
var router = express.Router();
var index = require("../controller/index")
/* GET home page. */
router.get('/', index.index);
router.post('/', index.submit);
router.get('/leads', index.delete);

module.exports = router;
