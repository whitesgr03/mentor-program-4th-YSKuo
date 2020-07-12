/* eslint-disable */

// 參考『Show time！公車即時動態』實作抓取『最新台北週末票房排行榜』資料
// 只是給自己留著做記錄所以一起放在 repository

const request = require('request');

const API_ENDPOINT = 'http://app2.atmovies.com.tw/boxoffice/twweekend';

function getTopSellMovies(cb) {
  request(
    {
      method: 'GET',
      url: `${API_ENDPOINT}`,
    },
    (err, res) => {
      if (err) {
        cb(err);
        return
      }

      cb(null, res.body);
  })
}

getTopSellMovies((err, html) => {
  if (err) {
    return console.log('發生錯誤', err)
  }

  let result = getMovieInfo(html);
  for (let i = 0; i < result.length; i++) {
    if (result[i]) {
      console.log(`${i+1} ${result[i]}`);      
    }
  }
})

function getMovieInfo(html) {
  let result = [];
  let start = 0;
  let end;

  while(start >= 0) {
    start = html.indexOf('<TD class=at11 colspan=6 align=left>', start + 1);
    end = html.indexOf('</a>', start);
    let str = html.slice(start, end);
    let data = parseData(str);

    result.push(data);
  }

  return result;
}

function parseData(str) {
  let closeOfTag = str.indexOf('/">');
  let name = str.slice(closeOfTag + 3, str.length);
  return name;
}
