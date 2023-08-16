function solution(cardLength, cards, maxNumber) {
    let maxSum = 0;
    for (let i = 0; i < cardLength; i += 1) {
        for (let j = i + 1; j < cardLength; j += 1) {
            for (let k = j + 1; k < cardLength; k += 1) {
                const sum = cards[i] + cards[j] + cards[k];
                if (sum <= maxNumber && sum > maxSum) maxSum = sum;
            }
        }
    }
    return maxSum;
}

const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const args = input.split('\n');
const [cardLength, maxNumber] = args[0].split(' ').map(Number);
const cards = args[1].split(' ').map(Number);

const output = solution(cardLength, cards, maxNumber);
console.log(output);
