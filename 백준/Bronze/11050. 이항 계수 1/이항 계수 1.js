// 이항 계수란 n개 중에서 k개를 선택하는 방법의 경우의 수
function solution(n, k) {
    // k가 0이거나 n과 같으면 이항 계수는 1
    if (k === 0 || k === n) return 1;

    const memoized = new Map([[1, 1]]);

    const factorial = (n) => {
        for (let i = memoized.size + 1; i <= n; i += 1) {
            memoized.set(i, memoized.get(i - 1) * i);
        }
        return memoized.get(n);
    };

    // 팩토리얼을 활용한 이항 계수 공식
    // nCk = n! / (k! * (n - k)!)
    return factorial(n) / (factorial(k) * factorial(n - k));
}

const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const [n, k] = input.split(' ').map(Number);

const output = solution(n, k);
console.log(output);
