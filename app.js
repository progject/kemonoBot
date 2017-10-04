const express = require('express');
const bodyParser = require('body-parser');
const bot = require('./routes/bot');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/', bot);

app.listen(8080, function () {
  console.log('kemokemo ');
});

module.exports = app;
