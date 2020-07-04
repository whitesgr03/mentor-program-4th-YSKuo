const request = require('request');

// 基本上都參考 https://dev.twitch.tv/docs/v5/reference/streams 的內容

const API_ENDPOINT = 'https://api.twitch.tv/kraken/streams';
const ID = 'x7y521n6qqt75hqyrbu5pdz1k9kuse';
const gameName = process.argv[2];

const callback = (err, res, body) => {
  if (err) {
    console.log('發生錯誤', err);
  }
  let data;
  try {
    data = JSON.parse(body);
  } catch (error) {
    return console.log('發生錯誤拿不到資料', error);
  }
  for (const item of data.streams) {
    /* eslint-disable-next-line */
    console.log(`Name: ${item.channel.display_name}, ID: ${item.channel._id}, Viewers: ${item.viewers}`);
  }
};

const printList = (Name, limit, offset) => {
  request({
    url: `${API_ENDPOINT}/?game=${Name}&limit=${limit}&offset=${offset}`,
    headers: {
      'Client-ID': ID,
      /* eslint-disable-next-line */
      'Accept': 'application/vnd.twitchtv.v5+json',
    },
  }, callback);
};

// 分別印出前 1-100 名和前 101-200 名的 streams
printList(gameName, 100, 0);
printList(gameName, 100, 100);
