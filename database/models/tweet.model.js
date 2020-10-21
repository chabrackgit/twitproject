const mongoose = require('mongoose')
const schema = mongoose.Schema;

const tweetSchema  = schema({
    content: {
        type: String,
        maxlength: [140, 'tweet trop long'],
        minlength: [3 , 'tweet trop court'],
        required : [true, 'champ obligatoire']
    },
    author: {type : schema.Types.ObjectId, ref:'user', required: true}
})

const Tweet  = mongoose.model('tweet', tweetSchema)

module.exports = Tweet;