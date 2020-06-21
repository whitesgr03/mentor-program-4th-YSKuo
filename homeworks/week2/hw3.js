// 字串解
let reverse = input => {
  let result = ''; // 設一空字串
  for (let i=input.length-1; i>=0; i--) { 
    // 從最後個字開始依序加進 result
    result += input[i];
  }
  console.log(result);
};

// 陣列解
// let reverse = input => {
//   let result = []; // 設一空陣列
//   for ( let i of input ) {
//     result.unshift(i); // 輸入的字依序從 result 第一個位置放入其中
//   }
//   console.log(result.join('')); // 用 join() 把陣列轉換成字串
// };

reverse('hello');