// 實在不會用 LIOJ 啊...
// 能否請教如何把我的解法拿到 LIOJ 去驗證，要怎麼改輸入？

let search = (arr, n) => {
  // 用二分搜尋法（切西瓜）
  let top = arr.length; // 西瓜頭設為輸入 arr 的長度
  let base = 0; // 西瓜尾設為 0
  let mid = Math.floor((top-base) / 2); // 西瓜尾到西瓜中間差多少”距離“，西瓜頭減尾除 2
  // console.log('top',top); // 以下 log 單純用來檢查用
  // console.log('mid',mid);
  // console.log('base',base);

  while (mid>0) {
    // console.log('---')
    // console.log('arr[base+mid]',arr[base+mid])
    if (arr[base+mid]===n) {return base+mid} 
    // 西瓜尾加上”距離“就是要切的西瓜頭和尾中間
    // 如果剛好中間就是要找的數字，那就回傳數字所在位置
    else if (n<arr[base+mid]) { // 如果要找的數字比切的地方小
      top = base+mid; // 把西瓜頭換成原本切的地方
      mid = Math.floor((top-base) / 2); // 再算一次新的西瓜頭和西瓜尾之間”距離“
    }
    else if (arr[base+mid]<n) { // 如果要找的數字比切的地方大
      base = base+mid; // 把西瓜尾換成原本切的地方
      mid = Math.floor((top-base) / 2); // 再算一次新的西瓜頭和西瓜尾之間”距離“
    }  
    // console.log('top',top);
    // console.log('mid',mid);
    // console.log('base',base);
  }
  // 上面迴圈只會檢查到除了初始西瓜尾以外的數字

  // 以防萬一也要確認初始西瓜尾是不是要找的數字
  if (arr[0]===n) {return 0} // 如果是在西瓜尾的話那就回傳 0
    
  return -1 // 都沒找到 就回傳 -1
}

// console.log(search([1, 3, 10, 14, 29, 30, 31, 299], 299));
console.log(search([1, 3, 10, 14, 29, 30, 31, 299], 1));