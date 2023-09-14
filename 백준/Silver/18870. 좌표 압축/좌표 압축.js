function solution(length, numbers) {
    const numberSet = [...new Set(numbers)].sort((a, b) => a - b);

    const indexDict = {};
    numberSet.forEach((number, index) => {
        indexDict[number] = index;
    });

    return numbers.map((number) => indexDict[number]);
}

const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const args = input.split('\n');
const length = Number(args[0]);
const numbers = args[1].split(' ').map(Number);

const output = solution(length, numbers).join(' ');
console.log(output);
