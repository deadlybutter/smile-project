const express = require('express');
const app = express();
app.use(express.static('public'));

const feed = require("feed-read");
let feedItems = [];
const CronJob = require('cron').CronJob;

app.get('/', function (req, res) {
  res.sendFile(`${__dirname}/index.html`);
});

app.get('/feed', function (req, res) {
  res.json(feedItems);
});

function fetchOnboardData() {
  console.info('Fetching feed...');
  feed(process.env.FEED_URL || '', function(err, articles) {
    if (err) {
      console.err('Fetch error: ', err);
      return;
    }

    console.info('Feed fetched.');
    feedItems = articles.splice(0, 4);
  });
}

app.listen(process.env.PORT, function () {
  console.info(`App listening on port ${process.env.PORT}.`);
  fetchOnboardData();

  new CronJob('*/30 * * * * *', function() {
    fetchOnboardData();
  }, null, true, 'America/Los_Angeles');
});
