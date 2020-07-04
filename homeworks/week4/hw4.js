const request = require('request');

const API_ENDPOINT = 'https://api.twitch.tv/kraken/games/top';
const ID = 'x7y521n6qqt75hqyrbu5pdz1k9kuse';

const options = {
  url: API_ENDPOINT,
  headers: {
    'Client-ID': ID,
    /* eslint-disable-next-line */
    'Accept': 'application/vnd.twitchtv.v5+json',
  },
};

const callback = (err, res, body) => {
  if (err) {
    console.log('發生錯誤', err);
  }
  const data = JSON.parse(body);
  for (const item of data.top) {
    console.log(`${item.viewers} ${item.game.name}`);
  }
};

request(options, callback);
