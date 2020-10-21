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
        required: true
    }    
})


const User  = mongoose.model('user', userSchema)

module.exports = User;