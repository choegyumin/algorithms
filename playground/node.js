function solution(...args) {
    return args;
}

const input = require('fs').readFileSync('./dev/stdin').toString().trim();
const args = input.split('\n');

const output = solution(...args);
console.log(output);
