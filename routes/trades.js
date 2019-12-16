var express = require('express');
var router = express.Router();
const Trades = require('../controllers/trades');

// Routes related to trades
router.route('/delete/:_id').delete(Trades.DeleteTrades);

module.exports = router;