var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var paypal = require('paypal-rest-sdk');

paypal.configure({
  'mode': 'sandbox', //sandbox or live
  'client_id': 'AWtlW8nUEWBcbCKs7aEugjoAhq4rZuoGAZVbTBa1Opqz9oNpnaT5-lJ76DnSMaxh1eFGGU-Z2PUX1jPh',
  'client_secret': 'EO3DxOn9Xul2eSfcnBI0PRkj4FDoqSWYN5N6qLkXzoq1VjSDyJADsRgQcmG3wfqoxBfIjYQGHBIaTTKz'
});

var usersRouter = require('./routes/users');
var productRouter = require('./routes/product');

var app = express();

//Connect db from config/db
const db = require('./config/db');
db.connect();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);
app.use('/product', productRouter);
app.use('/order', require('./routes/order'));
app.use('/order_detail', require('./routes/order_detail'));
app.use('/picture', require('./routes/picture'));
app.use('/comment', require('./routes/comment'));
app.use('/paypal', require('./routes/paypal_mt'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
