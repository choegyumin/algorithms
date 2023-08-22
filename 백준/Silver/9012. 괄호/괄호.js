// Stack
function solution(length, array) {
    return array.map((string) => {
        let stack = 0;
        for (let i = 0; i < string.length; i += 1) {
            const character = string[i];
            if (character === '(') stack += 1;
            if (character === ')') stack -= 1;
            if (stack < 0) return 'NO';
        }
        return stack ? 'NO' : 'YES';
    });
}

const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const args = input.split('\n');
const length = Number(args.shift());
const array = args;

const output = solution(length, array).join('\n');
console.log(output);
