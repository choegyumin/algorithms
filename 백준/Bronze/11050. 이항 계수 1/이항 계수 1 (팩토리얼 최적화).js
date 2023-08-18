function solution(n, k) {
    let a = 1;
    let b = 1;

    for (let i = 0; i < k; i++) {
        a *= n - i;
        b *= i + 1;
    }

    // 기존의 팩토리얼을 활용한 이항 계수 공식은 n이 커지면 감당할 수 없음
    // 팩토리얼을 활용한 새로운 식으로 계산
    // a = n * (n - 1) * ... * (n - (k - 1))
    // b = 1 * 2 * ... * k
    // nCk = a / b
    return a / b;
}

const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const [n, k] = input.split(' ').map(Number);

const output = solution(n, k);
console.log(output);
