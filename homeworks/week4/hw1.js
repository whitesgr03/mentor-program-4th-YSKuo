const request = require('request');

request({
  url: 'https://lidemy-book-store.herokuapp.com/books?_limit=10',
  method: 'GET',
},
(error, response, body) => {
  if (error) {
    return console.log('發生錯誤拿不到資料', error);
  }
  let books;
  try {
    books = JSON.parse(body);
  } catch (err) {
    return console.log('發生錯誤拿不到資料', err);
  }
  for (let i = 0; i < books.length; i += 1) {
    console.log(`${books[i].id} ${books[i].name}`);
  }
});
