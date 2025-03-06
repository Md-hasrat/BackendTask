const express = require('express');
const router = express.Router();

const userController = require('../controller/userController')

router.get('/greet', userController.register);

module.exports = router;