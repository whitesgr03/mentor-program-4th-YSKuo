const readline = require('readline');

const lines = [];
const rl = readline.createInterface({
  input: process.stdin,
});

rl.on('line', line => lines.push(line));

function solve(linesInput) {
  for (let i = 1; i <= Number(linesInput[0]); i += 1) {
    console.log('*'.repeat(i));
  }
}

rl.on('close', () => solve(lines));
