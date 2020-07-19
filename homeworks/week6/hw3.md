## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。
`<hr>` 在畫面上加分隔線。
`<strong>` 定義 **重要** 的文字，在畫面上會顯示為粗體，用法和 `<span>` 一樣。
`<b>` 將文字設定為粗體，但是不定義為重要的文字，用法和 `<span>` 一樣。
`<em>` 定義 *強調* 的文字，，在畫面上會顯示為斜體，用法和 `<span>` 一樣。
`<i>` 將文字設定為斜體，但是不定義為強調的文字，用法和 `<span>` 一樣。
`<button>` 定義按鈕，沒有調整 CSS 樣式的話，則在畫面上會顯示瀏覽器預設的樣式。

## 請問什麼是盒模型（box modal）
box modal 是用來描述網頁上每個元素尺寸的模型，一個 box modal 由裡到外以 content, padding, border, margin 組成，也就是說一個元素在網頁上呈現的大小是由這四個因子決定的。

## 請問 display: inline, block 跟 inline-block 的差別是什麼？
- block 的元素會佔滿整行(row)，也就是 block 元素和其他元素不會併排在同一行內，可以隨意調整 **寬高邊距** 等尺寸來改變元素大小。
- inline 的元素可以併排，但沒法直接用調整 **寬高邊距** 來改變大小，元素尺寸會隨 content 大小（例如文字大小）而定，樣式也是由 content 而定。
- inline-block 的元素可以併排也可以調整 **寬高邊距**。

## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？
- static 
  - 除了 `html` 以外所有元素的預設值，無法調整位置(top, bottom, left, right)，只隨著原本的 document flow 排出位置。
- relative
  - 元素的實質位置會與 static 位置相同，但可定義 top, bottom, left, right 來調整位置，即可相對於 ducument flow 的位子做出位移；當 element 位移時，子層所有的 elements 都會跟著移動。
  - 注意：元素實際位置還是在 static 的位置（即原本位置），非偏移過後的位置。
- absolute
  - 相對於 **最接近的** 父層做位移，如果父層沒有設定 `position: relative;` 則一路往上算到 `html` (因為 `html` 預設 `position: relative;`)，所以會相對於 `html` 做位移。
  - 注意：當元素使用 `absolute` 位移時，它實質上被抽離於原先的位子，所以附近的元素會當它不存在。
- fixed
  - 設定 `position: fixed;` 的元素會固定在畫面上某一位置，不論畫面 scroll 到哪裡該元素都是在同位置。
  - 常應用在固定 navbar 於畫面某位置上。
