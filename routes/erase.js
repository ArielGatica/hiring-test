var express = require('express');
var router = express.Router();
const Trades = require('../controllers/trades');

// Route to delete all trades
router.route('/all').delete(Trades.DeleteAllTrades);

module.exports = router;
