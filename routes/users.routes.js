const { get } = require('mongoose');

const router = require('express').Router();
const { signUpForm, signup} = require('../controllers/users.controller')

router.get('/signup/form', signUpForm)
router.post('/signup', signup)

module.exports = router;