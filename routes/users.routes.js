const router = require('express').Router();
const { ensureAuthenticated } = require('../config/guards.config')
const { signUpForm, signup, uploadImage} = require('../controllers/users.controller')

router.get('/signup/form', signUpForm)
router.post('/update/image', ensureAuthenticated, uploadImage)
router.post('/signup', signup)

module.exports = router;