let printFactor = num => {
  for (let i=1; i<=num; i++) { // 檢查 1 到 num 之間所有數字
    if (!(num%i)) { 
    // 如果是 num%i 是 0 的話就是因數
    // 為了讓 console.log(i) 這條式子運作所以條件判斷前面要 !
      console.log(i);
    }
  }
};

printFactor(10);