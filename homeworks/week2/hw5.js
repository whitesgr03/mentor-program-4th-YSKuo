// 實作 join()
let join = (arr, str) => {
  let result = ''; // 設一空字串
  for (let i=0; i<arr.length; i++ ) {
    result += arr[i]; // 把陣列的元素一一放入 result
    if ( i!=arr.length-1 ){ 
      result += str; 
      // 如果這一回不是最後一次就執行這條
      // 放入 str，下一回由從陣列元素開始放
      // 就可造成陣列元素中間插入 str 的情況
    }
  }
  return result;
}

// 實作 repeat()
let repeat = (str, times) => {
  let result = ''; // 設一空字串
  for (let i=1; i<= times; i++) {
    result += str; 
    // 從 1 開始到 times (包含times那次)結束
    // 每次都把輸入的 str 加到 result 裡面
  }
  return result;
}
console.log('self-make join()：',join(['a'], '!'));
console.log('self-make join()：',join(['a','a','a'], '!'));
console.log('self-make repeat()：',repeat('a', 5));

console.log('original join()：',['a'].join('!'));
console.log('original join()：',['a','a','a'].join('!'));
console.log('original repeat()：','a'.repeat(5));