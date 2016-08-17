const express = require('express');
const app = express();
app.use(express.static('public'));

const feed = require("feed-read");

app.get('/', function (req, res) {
  res.sendFile(`${__dirname}/index.html`);
});

app.get('/feed', function (req, res) {
  feed(process.env.FEED_URL || '', function(err, articles) {
    if (err) {
      console.err(err);
      return;
    }

    res.json(articles.splice(0, 4));
  });
});

app.listen(process.env.PORT, function () {
  console.info(`App listening on port ${process.env.PORT}!`);
});
