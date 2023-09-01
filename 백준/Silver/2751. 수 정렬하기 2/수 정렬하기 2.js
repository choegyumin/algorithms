function solution(length, numbers) {
    return numbers.sort((a, b) => a - b);
}

const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const args = input.split('\n');
const length = Number(args.shift());
const numbers = args.map(Number);

const output = solution(length, numbers).join('\n');
console.log(output);
