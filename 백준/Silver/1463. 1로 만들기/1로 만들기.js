// DP
function solution(number) {
    const dp = { 1: 0 };

    // Bottom-Up
    for (let i = 2; i <= number; i += 1) {
        dp[i] = dp[i - 1];
        if (i % 2 === 0) dp[i] = Math.min(dp[i], dp[i / 2]);
        if (i % 3 === 0) dp[i] = Math.min(dp[i], dp[i / 3]);
        dp[i] += 1;
    }

    return dp[number];
}

const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const number = Number(input);

const output = solution(number);
console.log(output);
