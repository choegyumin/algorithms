function solution(length, words) {
    return [...new Set(words)].sort((a, b) => {
        if (a.length !== b.length) return a.length - b.length;
        return a > b ? 1 : -1;
    });
}

const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const args = input.split('\n');
const length = Number(args.shift());
const words = args;

const output = solution(length, words).join('\n');
console.log(output);
