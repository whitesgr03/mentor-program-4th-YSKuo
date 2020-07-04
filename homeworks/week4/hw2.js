const request = require('request');

const APIurl = 'https://lidemy-book-store.herokuapp.com';
const act = process.argv[2];
const params = process.argv[3];

function listBooks() {
  request(
    `${APIurl}/books?_limit=20`,
    (error, response, body) => {
      if (error) {
        return console.log('發生錯誤拿不到資料', error);
      }
      let data;
      try {
        data = JSON.parse(body);
      } catch (err) {
        return console.log('發生錯誤拿不到資料', err);
      }
      for (let i = 0; i < data.length; i += 1) {
        console.log(`${data[i].id} ${data[i].name}`);
      }
    },
  );
}

function readBook(id) {
  request(
    `${APIurl}/books/${id}`,
    (error, response, body) => {
      if (error) {
        return console.log('發生錯誤拿不到資料', error);
      }
      let data;
      try {
        data = JSON.parse(body);
      } catch (err) {
        return console.log('發生錯誤拿不到資料', err);
      }
      if (data.id === undefined) {
        console.log('找不到指定書籍');
      } else {
        console.log(`id: ${data.id}, name: ${data.name}`);
      }
    },
  );
}

function deleteBook(id) {
  request.del(
    `${APIurl}/books/${id}`,
    (error, response) => {
      if (error) {
        return console.log('發生錯誤拿不到資料', error);
      }
      if (response.statusCode >= 200 && response.statusCode < 300) {
        return console.log(`已刪除 id 為 ${id} 的書籍`);
      }
      if (response.statusCode >= 400 && response.statusCode < 500) {
        return console.log('找不到指定書籍');
      }
    },
  );
}

function createBook(name) {
  request.post({
    url: `${APIurl}/books`,
    form: { name },
  },
  (error, response) => {
    if (error) {
      return console.log('發生錯誤拿不到資料', error);
    }
    if (response.statusCode >= 200 && response.statusCode < 300) {
      return console.log(`已新增書名為 ${name} 的書籍`);
    }
  });
}

function updateBook(id, name) {
  request.patch({
    url: `${APIurl}/books/${id}`,
    form: { name },
  },
  (error, response) => {
    if (error) {
      return console.log('發生錯誤拿不到資料', error);
    }
    if (response.statusCode >= 200 && response.statusCode < 300) {
      return console.log(`已更新 id 為 ${id} 的書名為 ${name}`);
    }
    if (response.statusCode >= 400 && response.statusCode < 500) {
      return console.log('找不到指定書籍');
    }
  });
}

switch (act) {
  case 'list':
    listBooks();
    break;
  case 'read':
    readBook(params);
    break;
  case 'delete':
    deleteBook(params);
    break;
  case 'create':
    createBook(params);
    break;
  case 'update':
    updateBook(params, process.argv[4]);
    break;
  default:
    console.log('請輸入正確指令：list, read, delete, create, update');
}
