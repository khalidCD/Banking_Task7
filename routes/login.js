

const express = require('express');
const router = express.Router();
const loginController = require('../controllers/login');

router.post('/login', loginController.login); // help to sned req
module.exports = router;