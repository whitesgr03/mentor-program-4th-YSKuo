const readline = require('readline');

const lines = [];
const rl = readline.createInterface({
  input: process.stdin,
});

rl.on('line', line => lines.push(line));

const Narcis = (n, m) => {
  for (let i = n; i <= m; i += 1) {
    if (i < 10) {
      console.log(i); // 0~9 的都是水仙花數，直接印出
    } else if (i >= 10) {
      const numInStr = i.toString(); // 把數字變成字串
      let sum = 0;
      for (let num = 0; num < numInStr.length; num += 1) {
        sum += Number(numInStr[num]) ** numInStr.length; // 數字乘指數
        if (sum > i) {
          break; // 如果已經算到和比該數字大就停止這個迴圈
        }
      }
      if (sum === i) {
        console.log(i); // 如果和與該數相等就印出
      }
    }
  }
};

function solve(linesInput) {
  const temp = linesInput[0].split(' ');
  Narcis(Number(temp[0]), Number(temp[1]));
}

rl.on('close', () => solve(lines));
