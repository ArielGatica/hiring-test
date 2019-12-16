var express = require('express');
var router = express.Router();
const Stocks = require('../controllers/stocks');

// Routes related to stocks
router.route('/list').get(Stocks.getDetails);
router.route('/save').post(Stocks.saveStocks);
router.route('/edit/:_id').put(Stocks.editStocks);

module.exports = router;