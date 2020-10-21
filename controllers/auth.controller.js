exports.signInForm = (req, res, next)=>{
    res.render('auth/auth-form', {errors: null})
}

exports.signin = (req, res, next)=>{
    res.end()
}

exports.signout = (req, res, next)=>{
    res.end()
}