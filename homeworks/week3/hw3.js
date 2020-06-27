const readline = require('readline');

const lines = [];
const rl = readline.createInterface({
  input: process.stdin,
});

rl.on('line', line => lines.push(line));

const checkPrime = (arr) => {
  arr.forEach((num) => {
    if (num === 1) { // 1 是 Composite 直接印出
      console.log('Composite');
    }
    if (num === 2) { // 2 是 Prime 直接印出
      console.log('Prime');
    }
    if (num > 2 && !(num % 2)) { // 大於 2 的偶數是 Composite
      console.log('Composite');
    }
    if (num > 2 && num % 2) {
      const temp = [];
      const sqrNum = Math.floor(Math.sqrt(num)); // 檢查到小於等於根號的值就好
      for (let i = 1; i <= sqrNum; i += 1) {
        if (!(num % i)) {
          temp.push(i);
        }
        if (temp.length === 2) {
          console.log('Composite');
          break;
        }
      }
      if (temp.length < 2) {
        console.log('Prime');
      }
    }
  });
};

function solve(linesInput) {
  const arr = [];
  for (let i = 1; i < linesInput.length; i += 1) {
    arr.push(Number(linesInput[i]));
  }
  checkPrime(arr);
}

rl.on('close', () => solve(lines));
