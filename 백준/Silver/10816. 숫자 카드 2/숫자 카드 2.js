function solution(cardLength, cards, targetLength, targets) {
    const dict = {};
    cards.forEach((card) => {
        dict[card] = (dict[card] ?? 0) + 1;
    });

    return targets.map((target) => dict[target] ?? 0);
}

const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const args = input.split('\n');
const cardLength = Number(args[0]);
const cards = args[1].split(' ').map(Number);
const targetLength = Number(args[2]);
const targets = args[3].split(' ').map(Number);

const output = solution(cardLength, cards, targetLength, targets).join(' ');
console.log(output);
