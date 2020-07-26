## 什麼是 DOM？
DOM 將 HTML 的標籤定義成一個個物件，並讓人可透過程式語言影響 HTML 結構，包括取得、改變、新增或移除 HTML 元素。

## 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？

參考此圖
![Graphical representation of an event dispatched in a DOM tree using the DOM event flow](https://www.w3.org/TR/DOM-Level-3-Events/images/eventflow.svg)

當某元素發生事件時，例如 滑鼠點擊某按鈕 或是 輸入框接受到鍵盤輸入按鈕（在此圖中是 `<td>` 這個元素發生事件），其過程是 **事件** 會先從最頂層的 `Window` 一路往下傳到各層的子元素直到該目標元素，再一路往上傳回 `Window`；其中由 `Window` 向下傳遞事件的過程叫 **捕獲(Capture Phase)**，事件到目標元素時是 **Target Phase**，最後事件往上傳的過程是 **冒泡(Bubble Phase)**。

所以整個過程簡單來說是 **先補獲，再冒泡**，不過事件傳到目標本身時沒有分捕獲跟冒泡。

## 什麼是 event delegation，為什麼我們需要它？
事件代理的意思是當某個元素發生事件時，過程是從父元素傳下來的，所以我們可以監聽設在 **父元素**，好處其下的所有子元素也會一併被監聽，就不用每個子元素個別設監聽。

## event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？
* `event.preventDefault()`
  * 事件傳到目標元素時，避免瀏覽器進行預設的行為
  * 例如可以設某按鈕的 `submit` 不進行預設行為，那點擊該按鈕時就不會 `submit` 了
  * 雖然可避免進行預設行為，但事件仍會繼續傳遞下去

* `event.stopPropagation()`
  * 事件傳到目標元素時，阻止事件繼續傳下去
  * 例如某父層被設置此 method，當其下子元素發生事件時，那事件就不會從父元素往下傳（捕獲）到目標元素，也不會繼續往上傳（冒泡）