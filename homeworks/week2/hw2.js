// 用正規表示法
let capitalize = word => {
  if ( /^[a-z]/g.test(word) ) { // 用正規表示法找出開頭為小寫的
    return word.replace(/(^[a-z])/, $1 => $1.toUpperCase() )
    // 用 replace 配合 RegExp 把開頭字抓出來換成大寫

  } 
  else {
    return word; 
    // 其他狀況不用處理直接回傳（包含開頭為大寫或非字母的）
  }
}

// 用charcode解決
// let capitalize = word => {
//   if ( word[0] > 'a' && word[0] < 'z' ) { // 找出開頭小寫
//     let result = ''; // 設一空字串
//     result += String.fromCharCode(word.charCodeAt(0)-32); 
//     // 把開頭字透過 charCodeAt() 轉換成數字後減掉 32 就變大寫
//     // 然後用 String.fromCharCode() 轉回字串然後加到 result 這變數裡
//     for (let i=1; i<word.length; i++){ // 把原本輸入字開頭後面的字母都加到 result
//       result += word[i];
//     }
//     return result;
//   } 
//   else {
//     return word;
//   }
// }

console.log(capitalize('hello'));
