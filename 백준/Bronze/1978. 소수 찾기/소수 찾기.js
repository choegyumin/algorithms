function solution(length, numbers) {
    const isPrime = (number) => {
        // 소수의 조건을 충족하지 않는 수는 판별을 생략
        if (
            (number % 1 !== 0) || // 1로 나누어지지 않는 수 (정수가 아닌 수)
            (number <= 1) || // 1이거나 1보다 작은 수
            (number !== 2 && number % 2 === 0) // 2를 제외한 짝수
        ) return false;

        // 3부터 N의 제곱근까지, 홀수를 반복하며 소수가 아닌 경우를 탐색
        for (let i = 3; i <= Math.sqrt(number); i += 2) {
            if (number % i === 0) return false;
        }

        return true;
    };

    const count = numbers.filter((number) => isPrime(number)).length;
    return count;
}

const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const args = input.split('\n');
const length = Number(args[0]);
const numbers = args[1].split(' ').map(Number);

const output = solution(length, numbers);
console.log(output);
