const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const morgan = require('morgan');


//@ descript handlebars setup
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//@ descript middleware setup
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));


//@descript Morgan setup
app.use(morgan('tiny'));



app.use('/', require('./routes/login'));
app.use('/account', require('./routes/account'));
app.use('/invoice', require('./routes/invoice'));
app.use('/cashflow', require('./routes/cashflow'));
app.use('/customers', require('./routes/customers'));


const PORT = process.env.PORT || 3500;


app.listen(PORT, () => {
  console.log('App is running at port' + PORT);
})
