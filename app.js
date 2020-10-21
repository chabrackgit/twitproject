const express = require('express');
const path = require('path');
const index = require('./routes');
const morgan = require('morgan');
const errorhandler = require('errorhandler')
require ('./database');

const app = express();
const port = process.env.PORT || 3000;

exports.app = app

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

require('./config/session.config')

app.use(morgan('short'));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(index);

if(process.env.NODE_ENV === 'development'){
    app.use(errorhandler())
}else{
    app.use((err, req, res, next)=>{
        const code = err.code || 500
        res.status(code).json({
            code: code,
            message: code === 500 ? null : err.message
        });
    })
}


app.listen(port);