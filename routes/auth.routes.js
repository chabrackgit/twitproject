const router = require('express').Router();
const { signInForm, signin, signout} = require('../controllers/auth.controller')

router.get('/signin/form', signInForm)
router.post('/signin', signin)
router.delete('/signout', signout)

module.exports = router;