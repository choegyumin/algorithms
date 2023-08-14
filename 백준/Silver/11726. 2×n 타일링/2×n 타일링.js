// DP
function solution(n) {
    // Fibonacci Sequence
    // F(n) = F(n - 1) + F(n - 2)

    const dp = [1, 2];
    for (let i = 2; i < n; i += 1) {
        // 문제 요구사항에 따라 10007로 나눈 나머지를 출력 (표현 가능한 수로 제한)
        dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;
    }

    return dp[n - 1];
}

const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const n = Number(input);

const output = solution(n);
console.log(output);

// 1 => 1 = 1
// 2 => 2 = 2
// 3 => 3 = 2 + 1
// 4 => 5 = 3 + 2
// 5 => 8 = 5 + 3
// 6 => 13 = 8 + 5
// 7 => 21 = 13 + 8
// 8 => 34 = 21 + 13
// 9 => 55 = 34 + 21
// 10 => 89 = 55 + 34
