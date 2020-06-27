const readline = require('readline');

const lines = [];
const rl = readline.createInterface({
  input: process.stdin,
});

rl.on('line', line => lines.push(line));

const checkReverse = (str) => {
  const reverseArr = str.split('').reverse();
  return reverseArr.join('') === str ? 'True' : 'False';
};

function solve(linesInput) {
  console.log(checkReverse(linesInput[0]));
}

rl.on('close', () => solve(lines));
