function solution(length, queue) {
    let time = 0;
    queue
        .sort((a, b) => a - b)
        .reduce((acc, cur) => {
            acc += cur;
            time += acc;
            return acc;
        }, 0);
    return time;
}

const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const args = input.split('\n');
const length = Number(args[0]);
const queue = args[1].split(' ').map(Number);

const output = solution(length, queue);
console.log(output);
