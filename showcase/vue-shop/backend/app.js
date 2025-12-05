const express = require('express');
const path = require('path');
// const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const index = require('./routes/index');
const api = require('./routes/api/index');
const users = require('./routes/users');

const app = express();

// setup with .env based vars
// mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_URL}`);
// current Homebrew Setup
mongoose.connect('mongodb://127.0.0.1:27017/store', { useNewUrlParser: true })
// mongoose.connect('mongodb://user:user@127.0.0.1:27017/store', { useNewUrlParser: true })
.then(() => console.log("MongoDB conected ..."))
.catch((err) => {
  console.log('Error on start: ' + err.stack);
  process.exit(1);
});

app.all('/*', function (req, res, next) {
  // CORS headers
  res.header('Access-Control-Allow-Origin', '*'); // restrict it to the required domain
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  // Set custom headers for CORS
  res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
  if (req.method == 'OPTIONS') {
    res.status(200).end();
  } else {
    next();
  }
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/api/v1', api);

const seeder = require('./routes/seeder/products');
app.use('/seeder', seeder);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
