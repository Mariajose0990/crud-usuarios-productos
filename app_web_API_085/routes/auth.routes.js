const express = require('express');
const router = express.Router();
const authCtrl = require('../controllers/auth.controller');

// Login
router.post('/login', authCtrl.login);

// Logout
router.post('/logout', authCtrl.logout);

module.exports = router;
