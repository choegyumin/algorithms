function solution(...args) {
    return args;
}

const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const args = input.split('\n'); // '\n' or ' '

const output = solution(...args);
console.log(output);
