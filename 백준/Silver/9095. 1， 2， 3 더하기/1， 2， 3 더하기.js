// DP
function solution(length, list) {
    // 연산자(+)가 없어도 합을 나타내는 방법으로 취급
    const dp = { 1: 1, 2: 2, 3: 4 };

    const max = Math.max(...list);

    // Bottom-Up
    for (let i = 4; i <= max; i += 1) {
        dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
    }

    return list.map((item) => dp[item]);
}

const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const args = input.split('\n');
const length = Number(args.shift());
const list = args.map(Number);

const output = solution(length, list).join('\n');
console.log(output);

// 1 => 1
// 1

// 2 => 2
// 1 + 1
// 2

// 3 => 4
// 1 + 1 + 1
// 2 + 1
// 1 + 2
// 3

// 4 => 7 = 4 + 2 + 1
// 1 + 1 + 1 + 1
// 2 + 1 + 1
// 1 + 2 + 1
// 1 + 1 + 2
// 2 + 2
// 3 + 1
// 1 + 3

// 5 => 13 = 7 + 4 + 2
// 1 + 1 + 1 + 1 + 1
// 2 + 1 + 1 + 1
// 1 + 2 + 1 + 1
// 1 + 1 + 2 + 1
// 1 + 1 + 1 + 2
// 2 + 2 + 1
// 2 + 1 + 2
// 1 + 2 + 2
// 3 + 1 + 1
// 1 + 3 + 1
// 1 + 1 + 3
// 3 + 2
// 2 + 3
