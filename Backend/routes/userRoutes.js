const express = require('express');

//Controller Functions
const {signup, login} = require('../controllers/controller');

const router = express.Router();

//Login route
router.post('/login', login);

//Signup route
router.post('/signup', signup);

module.exports = router