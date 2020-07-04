## 請以自己的話解釋 API 是什麼

API 就是一個可以和別人交換資訊的介面，只要對方有提供相應的 API，我就可以透過 API 得到對方的資料，也可以透過 API 修改（包括刪減或是新增）資料；反之，我也可以提供 API 給別人進行上述行為。

---

## 請找出三個課程沒教的 HTTP status code 並簡單介紹

- `204 No Content`：server 正確地 response 了，只是沒有內容。
- `302 Found`：要求 client 執行重新導向，但所求資料只是臨時性地改變了位置，所以之後要在訪問這個資料時，還是應以原本的 url 發出 request。（比較：`301 Moved Permanently` 則是永久改變位置）
- `401 Unauthorized`：client 沒有必要的驗證資料，表示 client 需要提供正確的驗證才會得到相應的 response。
- `505 HTTP Version Not Supported`：client 使用的 HTTP 版本不被 server 支援所以發生錯誤。

---

## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。

API url: https://eatable.com

### 說明

category       | method | path             | parameter        | example
---------------|--------|------------------|------------------|--------
回傳所有餐廳資料 | GET     | /restaurants     | _limit: 限制回傳數量| /restaurants?_limit: 5
回傳單一餐廳資料 | GET     | /restaurants/:id | none             | /restaurants/3
刪除餐廳        | DELETE  | /restaurants/:id | none             | /restaurants/3
新增餐廳        | POST    | /restaurants     | name: 餐廳名稱    | none
更改餐廳        | PATCH   | /restaurants/:id | name: 餐廳名稱    | /restaurants/3

### Example Response

```
[
	{"id":1,"name":"包大人吃到飽"},
	{"id":2,"name":"豹子頭全都要"},
	{"id":3,"name":"金鷹中心"},
	{"id":4,"name":"大快樂"},
	{"id":5,"name":"古拳法雞湯"},
	{"id":6,"name":"有為餅店"},
	{"id":7,"name":"豐夥輪"},
	{"id":8,"name":"九五二七精華"},
	{"id":9,"name":"春樹秋霜茶餐廳"},
	{"id":10,"name":"雪風飄飄"}
]
```