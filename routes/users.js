const express = require('express');
const router = express.Router();
const auth = require("../controllers/authController.js");
const authOI = require("../controllers/authControllerOI.js");
const { forwardAuthenticated } = require('../config/auth');

router.get('/open', auth.open);

router.get('/register', forwardAuthenticated, auth.register);
router.post('/register', auth.postRegister);

router.get('/openid', forwardAuthenticated, authOI.login);
router.post('/openid', authOI.openid);
router.get('/openid/return', forwardAuthenticated, authOI.postLogin);

router.get('/logout', authOI.logout);

module.exports = router;