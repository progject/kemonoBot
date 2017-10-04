const express = require('express');
const bodyParser = require('body-parser');
const bot = require('./routes/bot');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/', bot);

app.listen(process.env.PORT, function () {
  console.log('Example app listening on port '+process.env.PORT);
});

module.exports = app;
