// ./routes/index.js
const express = require('express');
const router  = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'App running' });
});

// router.get('/products', function(req, res, next) {
//   res.render('api/index', { title: 'App running' });
// });

module.exports = router;