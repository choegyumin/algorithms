function solution(numbers) {
    return numbers.map((number) => {
        const string = String(number);
        const { length } = string;
        for (let i = 0; i < Math.floor(length / 2); i += 1) {
            if (string[i] !== string[length - 1 - i]) return 'no';
        }
        return 'yes';
    });
}

const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const args = input.split('\n');
args.pop();
const numbers = args.map(Number);

const output = solution(numbers).join('\n');
console.log(output);
