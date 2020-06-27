## hw1：好多星星
簡單，沒啥問題。
看 examples 學到新招用 `Array.from()` 產生 `一個長度是 n 的 array`。

## hw2：水仙花數

沒啥問題，不過看到 LIOJ 上有人用可短時間解決問題，就嘗試改 code 但就是達不到那速度於是放棄了XD，我想持續練應該都會進步的。

## hw3：判斷質數

看 examples 的解法好簡潔啊，自己寫得方向基本上是對的但顯得囉唆，值得學習。
BTW 我常常會用 for of/in 來跑 array/string/object 的每一個 item，但是用這方法卻被 ESLint 擋起來得到 `no-restricted-syntax iterators/generators require regenerator-runtime“`，像我質數這題本來用 for of 跑 array 後來改成用 forEach()，結果在 LIOJ 上跑的時間還變比較久。
for of/in 這種寫法真的不推薦使用嗎？


## hw4：判斷迴文

這題沒啥問題，看到題目也秒想到用 array 來 reverse 的解法，不過好奇 loop 和用 array 哪個比較快？

## hw5：聯誼順序比大小

看到 LIOJ 1004 的錯誤率佔比特別高就覺得這題一定有毛病，後來看到題目有特別提醒 `要特別注意的是 A 與 B 可能是很大的數字，但保證長度為 512 個位數以內`，直覺這就是造成錯誤率高的部分啦，不過一開始我還是轉數字的方式丟到 LIOJ 去，果不其所然得到 `WA`。

後來就想到也可 String 從頭到尾每個位數比，寫完之後丟 LIOJ 就得到 `AC` 了，不過我有點好奇如果沒超過 Number 可記錄的範圍，那是轉成 Number 直接比大小比較快，還是一樣用字串解比較快？