const request = require('request');

const keyword = process.argv[2];
const API_ENDPOINT = 'https://restcountries.eu/rest/v2';

if (!keyword) {
  console.log('請輸入國家英文名稱');
} else {
  request(`${API_ENDPOINT}/name/${keyword}`,
    (err, res, body) => {
      if (err) {
        return console.log('發生錯誤拿不到資料', err);
      }
      let data;
      try {
        data = JSON.parse(body);
      } catch (error) {
        return console.log('發生錯誤拿不到資料', error);
      }
      if (data.status === 404) {
        return console.log('找不到國家資訊');
      }
      for (let i = 0; i < data.length; i += 1) {
        console.log(
          '============\n',
          `國家：${data[i].name}\n`,
          `首都：${data[i].capital}\n`,
          `貨幣：${data[i].currencies[0].code}\n`,
          `國碼：${data[i].callingCodes[0]}`,
        );
      }
    });
}
