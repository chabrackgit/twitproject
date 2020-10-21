const { app } = require('../app');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');

app.use(session({
    secret: 'chabracktweet',
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: false,
        maxAge: 1000*60*60*24*14  // session de 14 jours
    },
    store: new MongoStore({
        mongooseConnection: mongoose.connection,
        ttl: 60*60*24*14 
    })
}))
