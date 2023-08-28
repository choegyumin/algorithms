function solution(n, m) {
    const min = Math.min(n, m);

    /** 최대공약수: 두 수의 공통된 약수 중 가장 큰 수 */
    let gcd = 1;
    for (let i = 2; i <= min; i += 1) {
        if (n % i !== 0 || m % i !== 0) continue;
        gcd = i;
    }

    /** 최소공배수: 두 수의 공통된 배수 중 가장 작은 수 */
    let lcm = min;
    while (true) {
        if (lcm % n === 0 && lcm % m === 0) break;
        lcm += 1;
    }

    return [gcd, lcm];
}

const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const args = input.split(' ');
const [n, m] = args.map(Number);

const output = solution(n, m).join('\n');
console.log(output);
