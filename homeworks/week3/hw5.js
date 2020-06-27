const readline = require('readline');

const lines = [];
const rl = readline.createInterface({
  input: process.stdin,
});

rl.on('line', line => lines.push(line));

const judge = (arr) => {
  if (arr[0] === arr[1]) { // 兩字串完全一樣就是平手不用比
    return 'DRAW';
  }

  // 如果大於 Number 型態能記錄的值，那就用字串直接比
  // 先比字串長度，比較長就代表位數比較多那一樣是數字大的
  if (arr[0].length > arr[1].length) {
    return arr[2] === '1' ? 'A' : 'B';
  }
  if (arr[0].length < arr[1].length) {
    return arr[2] === '-1' ? 'A' : 'B';
  }

  // 若字串長一樣，那就從頭開始一個個比數字
  for (let i = 0; i < arr[0].length; i += 1) {
    const A = arr[0];
    const B = arr[1];
    if (Number(A[i]) > Number(B[i])) {
      return arr[2] === '1' ? 'A' : 'B';
    }
    if (Number(A[i]) < Number(B[i])) {
      return arr[2] === '-1' ? 'A' : 'B';
    }
  }

  return 'DRAW';
};

function solve(linesInput) {
  for (let i = 1; i < linesInput.length; i += 1) {
    console.log(judge(linesInput[i].split(' ')));
  }
}

rl.on('close', () => solve(lines));
