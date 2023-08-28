// DP
function solution(length, numbers) {
    // Fibonacci Sequence
    // F(n) = F(n - 1) + F(n - 2)

    const dp = [
        [1, 0],
        [0, 1],
    ];
    for (let i = 2; i <= Math.max(...numbers); i += 1) {
        const a = dp[i - 1];
        const b = dp[i - 2];
        dp[i] = [a[0] + b[0], a[1] + b[1]];
    }

    const fibonacci = (n) => dp[n];
    return numbers.map(fibonacci);
}

const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const args = input.split('\n');
const length = Number(args.shift());
const numbers = args.map(Number);

const output = solution(length, numbers)
    .map((arr) => arr.join(' '))
    .join('\n');
console.log(output);

// 0 => (1, 0)
// 1 => (0, 1)
// 2 => (1, 1) = (0, 1) + (1, 0)
// 3 => (1, 2) = (1, 1) + (0, 1)
// 4 => (2, 3) = (1, 2) + (1, 1)
