const express = require('express');
const router = express.Router();
const accountController = require('../controllers/account');

router.get('/accounts/:customer_id', accountController.getAccountsByCustomerId);

module.exports = router;
