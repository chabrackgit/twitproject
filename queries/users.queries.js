const User = require('../database/models/user.model')

exports.createUser = async (user)=>{
    try {
        const hashedPassword = await User.hashPassword(user.password)
        const newUser = new User({
        username: user.username,
        local: {
            email: user.email,
            password: hashedPassword
        }
    })
    return newUser.save()
    } catch (e) {
        throw e
    }
}

exports.findUserPerEmail = (email) => {
    try {
        return User.findOne({ 'local.email': email}).exec()
    } catch (e) {
        throw e
    }
}

exports.findUserPerId = (id) => {
    try {
        return User.findById(id).exec()
    } catch (e) {
        throw e
    }
}
