## 請解釋後端與前端的差異。

- Front-end： browser（由 HTML, CSS, JavaScript 組成），讓使用者在 browser 上操作並互動（包括發送 request 給 server）。
- Back-end： server 及 database 處理資訊並回傳 response 給 browser。

---

## 假設我今天去 Google 首頁搜尋框打上：JavaScript 並且按下 Enter，請說出從這一刻開始到我看到搜尋結果為止發生在背後的事情。

1. 使用者在 browser 上發送指令（透過 OS -> Hardware），例：在搜尋框打上 JavaScript 並按下 enter
2. browser 問 DNS 目標網頁（JavaScript 的搜尋結果）的 IP 位址
3. DNS 回給 browser 所需的 IP 位址
4. browser 發送 request（我需要 JavaScript 的搜尋結果）到該 IP 位址
5. 位於該 IP 位址的 server 收到 request
6. server 向 database 詢問所需資料
7. database 找到所需資料（HTML, CSS, JS files）並複製一份給 server
8. server 回傳 response（給你 JavaScript 的搜尋結果）給 browser
9. browser 解析資訊（HTML, CSS, JS files）並顯示出來，使用者就可以在瀏覽器上看到搜尋結果

課程截圖
![](https://i.imgur.com/MlNcSvM.png)

補充
#### DNS
*(**D**omain **N**ame **S**ystem)*

DNS 就是類似手機裡的`聯絡人`，每當你要打電話給你的朋友，你可以拿起手機直接撥打他的`電話號碼`；或是點選手機聯絡人中他的`名字`，那你的手機就會透過已記錄的`電話號碼`來撥號。DNS 利用類似的概念，當你想要瀏覽一個網站（例如 Google），你可以直接輸入該網站的`IP 位址`（Google 的 IP 位址為`8.8.8.8`），或是在瀏覽器網址列輸入的`Domain name`（輸入`www.google.com`），那你的瀏覽器就會透過 DNS 幫你連接到該網站。

- 把`IP 位址`類比為聯絡人的`電話號碼`
    - 例 你的朋友的`電話號碼`為`0912345678`
    - 例 Google 的`IP 位址`為`8.8.8.8`
- 把`Domain name`類比為聯絡人的`名字`
    - 例 你的朋友的`名字`為`John Doe`
    - 例 Google 的`Domain name`為`www.google.com`

參考：
[DNS in One Picture](https://roadmap.sh/guides/dns-in-one-picture)

---

## 請列舉出 3 個「課程沒有提到」的 command line 指令並且說明功用

- `cd` 沒輸入資料夾名稱直接移動到 home folder
- `cd ~` 移到 ~ ，其中 ~ 是 /User/id 的代稱
- `open -a <application>` 開啟指定 app
- `open .` 開啟當前資料夾
- `exit` 關閉視窗