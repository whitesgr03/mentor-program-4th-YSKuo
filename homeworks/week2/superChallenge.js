// 不用+-*/做出相加兩數的函數
// 被這題打成智障

let add = (a, b) => {
  let result = []; // 假設一空 array 後面用來放運算結果
  let aBit = a.toString(2).split('');
  let bBit = b.toString(2).split('');
  // 把輸入值轉換成 2 進位數字的 string 並分割成 array
  aBitRe = aBit.map(bit=> bit = Number(bit)).reverse();
  bBitRe = bBit.map(bit=> bit = Number(bit)).reverse();
  // 用 map 把 array 裡每個內容都轉變成 number 
  // 並用 reverse 左右顛倒數字順序方便後面進位運算（因為 array 從左至右放元素）
  // console.log('a',aBitRe); // 以下 log 單純用來檢查用
  // console.log('b',bBitRe); 

  // 以下參考 full adder 概念
  let Cin = 0; // 前一個位數運算後的進位結果
  let Cout = 0; // 這一個位數運算後的進位結果
  let S = 0;  // 這一個位數運算後的結果（本位的和訊號）
  if (bBitRe.length >= aBitRe.length) { 
  // 當 b 的位數長度大於等於 a 的位數長度，就執行這裡面的內容
    bBitRe.forEach((bit,index) => { // 針對 b 每個位數進行以下內容
      Cin = Cout; // 上一個位數的進位丟進來到這一個位數運算
      // console.log('----index----', index);
      // console.log('Cin', Cin);
      // console.log('aBit', aBitRe[index]);
      // console.log('Bbit', bit);
      
      S = aBitRe[index] ^ bit ^ Cin; 
      // 在這個 forEach 裡面，bit 就是 b 的該位數（bBit）
      // aBitRe[index] 就是和 bBit 同位數的 a 該位數（aBit）
      // 當aBit , bBit, Cin 其中恰一種為 1 時， S 為 1 其他結果都是 S 為 0
      
      result.unshift(S); 
      // 把本位的和訊號依序從頭放進 result（後面就不用再次顛倒順序）
      // 可以想成按個位數、十位數這樣把數字放進去（只是現在是 2 進位）

      if (aBitRe[index] && bit && Cin) { 
        // 當aBit , bBit, Cin 都為 1 時，進位結果為 1
        Cout = 1;
        // console.log('-1 if-')
      }
      else if (aBitRe[index] ^ bit ^ Cin) { 
        // 當aBit , bBit, Cin 其中恰一種為 1 時，進位為 0
        Cout = 0;
        // console.log('-2 if-')
      } 
      else if (!aBitRe[index] && !bit && !Cin) { 
        // 當 aBit , bBit, Cin 都為 0 時，進位為 0
        Cout = 0;
        // console.log('-3 if-')
      } 
      else {
        // 其他狀況，包含aBit , bBit, Cin 三者有兩者為 1 時
        Cout = 1;
        // console.log('-4 else-')
      }
      // console.log('Cout', Cout);
    })
  } 
  else if (aBitRe.length > bBitRe.length) {
  // 當 a 的位數長度大於 b 的位數長度，就執行這裡面的內容
  // 運算方式都和上個 if 一樣，只是 a 和 b 互換而已
    aBitRe.forEach((bit,index) => {
      Cin = Cout;
      S = bBitRe[index] ^ bit ^ Cin;
      result.unshift(S);

      if (bBitRe[index] && bit && Cin) {
        Cout = 1;
      }
      else if (bBitRe[index] ^ bit ^ Cin) {
        Cout = 0;
      } 
      else if (!bBitRe[index] && !bit && !Cin) {
        Cout = 0;
      } 
      else {
        Cout = 1;
      }
    })
  } 
  // console.log(Cout);
  if (Cout) {
  // 如果最後運算還有進位 1 的話，也要加進 result 中
    result.unshift(Cout);
  }
  
  // console.log(result);
  return parseInt(result.join(''), 2);
  // 將 result 用 join() 合成字串
  // 然後用 paeseInt 把字串從 2 進位轉換成 10 進位的數字
  // 把結果輸出
};
console.log(add(23,30));
console.log(add(453,12));