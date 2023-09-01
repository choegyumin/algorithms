function solution(length, coords) {
    return coords.sort((a, b) => {
        if (a[0] !== b[0]) return a[0] - b[0];
        return a[1] - b[1];
    });
}

const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const args = input.split('\n');
const length = Number(args.shift());
const coords = args.map((string) => string.split(' ').map(Number));

const output = solution(length, coords)
    .map((coord) => coord.join(' '))
    .join('\n');
console.log(output);
