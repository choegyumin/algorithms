// Queue
function solution(n, k) {
    const problem = Array.from({ length: n }, (value, index) => index + 1);
    const permutation = [];
    let index = 0;
    while (problem.length > 0) {
        index = (index + k - 1) % problem.length;
        const target = problem.splice(index, 1)[0];
        permutation.push(target);
    }
    return permutation;
}

const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const [n, k] = input.split(' ').map(Number);

const output = `<${solution(n, k).join(', ')}>`;
console.log(output);
