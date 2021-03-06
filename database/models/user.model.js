const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const schema = mongoose.Schema;

const userSchema  = schema({
    local: {
        email : {
            type: String,
            required: true,
            unique: true
        },
        password : {
            type: String,
            required: true,
        }
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    avatar : {
        type: String,
        default: '/images/profile.svg'
    }    
})

userSchema.statics.hashPassword = (password)=>{
    return bcrypt.hash(password, 12)
}

userSchema.methods.comparePassword = function(password){
    return bcrypt.compare(password, this.local.password)
}


const User  = mongoose.model('user', userSchema)

module.exports = User;