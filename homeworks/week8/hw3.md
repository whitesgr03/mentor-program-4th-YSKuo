## 什麼是 Ajax？
全名為 **A**synchronous **J**avaScript **a**nd **X**ML，能使 Web 應用程式能快速、即時更動介面及內容，不需要重新讀取整個網頁，讓程式更快回應使用者的操作。雖然全名有 XML，但此方法不限定只交換 XML 的資料，近期比較常用的格式是 JSON。

## 用 Ajax 與我們用表單送出資料的差別在哪？
表差送出資料會重新讀取整個頁面，會有一小段時間是頁面整個空白。
用 AJAX 的話只有部分資料更新在頁面上，使用者體驗也會比較好。

## JSONP 是什麼？
透過在 HTML 中加入 `<link href="">` 或 `<script src="">` 的方式來存取檔案；把寫好的 Request 資料讀進來一起發送出去並拿到 Response。

## 要如何存取跨網域的 API？
要有 CORS (**C**ross-**O**rigin **R**esource **S**haring)，透過在伺服器上的設定而讓其他網域的人能夠存取資料。

如果 server 端有設定的話，則回傳的 Response Header 會有
```
Access-Control-Allow-Origin: *
```

如此一來，身為 client 就可以存取跨領域的 API。

## 為什麼我們在第四週時沒碰到跨網域的問題，這週卻碰到了？
因為瀏覽器有 Same Origin Policy （同源政策），這是基於安全考量才加在瀏覽器上的限制，Request 還是發得出去且瀏覽器也會收到 Response，但因為同源政策的關係則不把結果傳到 JS 上。

第四週是直接用 Node.js 發送 Request，就沒有這個限制了。