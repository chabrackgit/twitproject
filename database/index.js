const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://mohamed:momo@cluster0.awswd.gcp.mongodb.net/twitter?retryWrites=true&w=majority', { 
        useNewUrlParser: true})
        .then( ()=> console.log('Connexion à tweetDB Cloud'))
        .catch(err => console.log(err))