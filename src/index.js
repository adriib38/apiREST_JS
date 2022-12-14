const express = require('express');
const res = require('express/lib/response');
const app = express();
const morgan = require('morgan');

//Settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Routes
app.use(require('./routes/index'));
app.use('/api/movies', require('./routes/movies'));

//Starting the server
app.listen(3000, ()=> {
    console.log(`Server on port ${app.get('port')}`);
});