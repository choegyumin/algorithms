function solution(length, scores) {
    const top = Math.max(...scores);
    const total = scores.reduce((total, score) => {
        return (total += (score / top) * 100);
    }, 0);
    return total / length;
}

const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const args = input.split('\n');
const length = Number(args[0]);
const scores = args[1].split(' ').map(Number);

const output = solution(length, scores);
console.log(output);
