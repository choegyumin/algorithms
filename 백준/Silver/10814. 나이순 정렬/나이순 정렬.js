function solution(length, members) {
    return members.sort((a, b) => {
        if (a[0] !== b[0]) return a[0] - b[0];
        return 0;
    });
}

const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const args = input.split('\n');
const length = Number(args.shift());
const members = args.map((string) => {
    const [age, name] = string.split(' ');
    return [Number(age), name];
});

const output = solution(length, members)
    .map((member) => member.join(' '))
    .join('\n');
console.log(output);
