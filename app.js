var express = require('express');
var app = express();
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(`${__dirname}/index.html`);
});

app.listen(process.env.PORT, function () {
  console.info(`App listening on port ${process.env.PORT}!`);
});
