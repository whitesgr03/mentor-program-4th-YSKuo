/* eslint-disable */

// Lidemy HTTP Challenge 通關過程寫的內容
// 只是給自己留著做記錄所以一起放在 repository

const request = require('request');

const API_ENDPOINT = 'https://lidemy-http-challenge.herokuapp.com';
const level = 'lv15'
const token = '{ILOVELIdemy!!!}';
const id = '79';

const getEntry = () => {
  request({
      method: 'GET',
      url: `${API_ENDPOINT}/${level}`,
      qs: {
        token,
        // hint: 1,
        // email: 'lib@lidemy.com',
        // version: '1A4938Jl7',
        // id,
      }
    },
    (err, res, body) => {
      if (err) {
        return console.log('無法獲取資訊', err);
      }
      try {
          console.log(body);
      } catch (error) {
        return console.log('無法獲取資訊', error);
      }
    }
  );
};

const sayHello = () => {
  request({
      method: 'GET',
      url: `${API_ENDPOINT}/api/v3/hello`,
      headers: {
        origin: 'lidemy.com',
      },
    },
    (err, res, body) => {
      if (err) {
        return console.log('無法獲取資訊', err);
      }
      try {
        console.log(body);
      } catch (error) {
        return console.log('無法獲取資訊', error);
      }
    }
  );
};

const getToken = () => {
  request({
      method: 'GET',
      url: `${API_ENDPOINT}/api/v3/deliver_token`,
      followOriginalHttpMethod: true,
      followRedirect: false,
    },
    (err, res, body) => {
      if (err) {
        return console.log('無法獲取資訊', err);
      }
      try {
        console.log(res.statusCode);
        console.log(res);
        console.log(body);
      } catch (error) {
        return console.log('無法獲取資訊', error);
      }
    }
  );
};

const getLogs = () => {
  request({
      method: 'GET',
      url: `${API_ENDPOINT}/api/v3/logs`,
      proxy: 'http://122.54.227.188:8080',
    },
    (err, res, body) => {
      if (err) {
        return console.log('無法獲取資訊', err);
      }
      try {
        // console.log(res.statusCode);
        console.log(res);
        // console.log(body);
      } catch (error) {
        return console.log('無法獲取資訊', error);
      }
    }
  );
};

const getIndex = () => {
  request({
      method: 'GET',
      url: `${API_ENDPOINT}/api/v3/index`,
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
      },
    },
    (err, res, body) => {
      if (err) {
        return console.log('無法獲取資訊', err);
      }
      try {
        // console.log(res.statusCode);
        console.log(res);
        // console.log(body);
      } catch (error) {
        return console.log('無法獲取資訊', error);
      }
    }
  );
};

const postBook = () => {
  request({
      method: 'POST',
      url: `${API_ENDPOINT}/api/v2/books`,
      headers: [
        {
          name: 'content-type',
          value:'application/x-www-form-urlencoded',
        }
      ],
      form: {
        name: '《大腦喜歡這樣學》',
        ISBN: 9789863594475,
      }
    },
    (err, res, body) => {
      if (err) {
        return console.log('無法獲取資訊', err);
      }
      try {
        console.log(res.statusCode);
        console.log(body);
      } catch (error) {
        return console.log('無法獲取資訊', error);
      }
    }
  );
};

const getMe = () => {
  request({
      method: 'GET',
      url: `${API_ENDPOINT}/api/v2/me`,
      headers: {
        'Authorization': 'Basic YWRtaW46YWRtaW4xMjM='
      },
    },
    (err, res, body) => {
      if (err) {
        return console.log('無法獲取資訊', err);
      }
      try {
        console.log(body);
      } catch (error) {
        return console.log('無法獲取資訊', error);
      }
    }
  );
};

const getSysInfo = () => {
  request({
      method: 'GET',
      url: `${API_ENDPOINT}/api/v2/sys_info`,
      headers: {
        'X-Library-Number': 20,
        'User-Agent': 'Mozilla/5.0 (compatible; MSIE 6.0)',
        'Authorization': 'Basic YWRtaW46YWRtaW4xMjM='
      },
    },
    (err, res, body) => {
      if (err) {
        return console.log('無法獲取資訊', err);
      }
      try {
        console.log(body);
      } catch (error) {
        return console.log('無法獲取資訊', error);
      }
    }
  );
};

const getBookByID = (id) => {
  request({
      method: 'GET',
      url: `${API_ENDPOINT}/api/v2/books/${id}`,
    },
    (err, res, body) => {
      if (err) {
        return console.log('無法獲取資訊', err);
      }
      let data;
      try {
        data = JSON.parse(body);
        console.log(data);
      } catch (error) {
        return console.log('無法獲取資訊', error);
      }
    }
  );
};

const getBookByWord = (keyword) => {
  request({
      method: 'GET',
      url: `${API_ENDPOINT}/api/v2/books`,
      qs: { 
        q: keyword,
      },
      headers: {
        'Authorization': 'Basic YWRtaW46YWRtaW4xMjM=',
      },
    },
    (err, res, body) => {
      if (err) {
        return console.log('無法獲取資訊', err);
      }
      let data;
      try {
        data = JSON.parse(body);
        console.log(data);
      } catch (error) {
        return console.log('無法獲取資訊', error);
      }
    }
  );
};

const deleteBook = (id) => {
  request({
      method: 'DELETE',
      url: `${API_ENDPOINT}/api/v2/books/${id}`,
      headers: {
        'Authorization': 'Basic YWRtaW46YWRtaW4xMjM='
      },
    },
    (err, res, body) => {
      if (err) {
        return console.log('無法獲取資訊', err);
      }
      try {
        console.log(res.statusCode);
        console.log(body);
      } catch (error) {
        return console.log('無法獲取資訊', error);
      }
    }
  );
};

const updateBook = (id) => {
  request({
      method: 'PATCH',
      url: `${API_ENDPOINT}/api/v2/books/${id}`,
      headers: {
          name: 'content-type',
          value: 'application/x-www-form-urlencoded',
          Authorization: 'Basic YWRtaW46YWRtaW4xMjM=',
      }
      ,
      form: {
        ISBN: 9981835423,
      }
    },
    (err, res, body) => {
      if (err) {
        return console.log('無法獲取資訊', err);
      }
      try {
        console.log(res.statusCode);
        console.log(body);
      } catch (error) {
        return console.log('無法獲取資訊', error);
      }
    }
  );
};


getEntry();
// getIndex();
// getLogs();
// getToken();
// sayHello();
// getSysInfo();
// postBook();
// getBookByWord('我');
// deleteBook(89);
// getMe();
// updateBook(72);
