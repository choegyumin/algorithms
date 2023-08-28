function solution(n, m) {
    /** 최대공약수(두 수의 공통된 약수 중 가장 큰 수) 구하기 */
    const getGCD = (a, b) => {
        // 유클리드 호제법
        // `r = a % b`
        // `gcd(a, b) = gcd(b, r)`
        // `r = 0`일 때, `gcd(a, b) = b`
        while (true) {
            let r = a % b;
            if (r === 0) break;
            a = b;
            b = r;
        }
        return b;
        // const r = a % b;
        // return r === 0 ? b : getGCD(b, r);
    };

    /** 최소공배수(두 수의 공통된 배수 중 가장 작은 수) 구하기 */
    const getLCM = (a, b) => {
        // 최대공약수를 이용한 공식
        // lcm(a, b) =  a * b / gcd(a, b)
        return (a * b) / getGCD(a, b);
    };

    return [getGCD(n, m), getLCM(n, m)];
}

const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const args = input.split(' ');
const [n, m] = args.map(Number);

const output = solution(n, m).join('\n');
console.log(output);
