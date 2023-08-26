function solution(lengthN, listA, lengthM, listB) {
    const aSet = new Set(listA);
    return listB.map((value) => (aSet.has(value) ? 1 : 0));
}

const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const args = input.split('\n');
const lengthN = Number(args[0]);
const listA = args[1].split(' ').map(Number);
const lengthM = Number(args[2]);
const listB = args[3].split(' ').map(Number);

const output = solution(lengthN, listA, lengthM, listB).join('\n');
console.log(output);
