function solution(length) {
    // 1. N이 1의 거듭제곱이라면, N을 반환한다.
    // 2. N이 1의 거듭제곱이 아니라면, N보다 크지만 가장 작은 1의 거듭제곱 M을 찾아 2N에서 뺀 값을 반환한다. `n * 2 - m`

    // length(N)과 같거나 length보다 크지만 가장 작은 1의 거듭제곱 계산
    let pow = 1;
    while (pow < length) pow <<= 1;

    // 아래 식은 조건과 무관하게 올바른 값을 반환 (33 * 2 - 64 = 2, 32 * 2 - 32 = 32)
    return length * 2 - pow;
}

const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const length = Number(input);

const output = solution(length);
console.log(output);

// 1 => 1
// 2 => 2
// 3 => 2
// 4 => 4
// 5 => 2
// 6 => 4
// 7 => 6
// 8 => 8
// 9 => 2
// 10 => 4
// 11 => 6
// 12 => 8
// 13 => 10
// 14 => 12
// 15 => 14
// 16 => 16
// 17 => 2
// 18 => 4
// 19 => 6
// 20 => 8
// 21 => 10
// 22 => 12
// 23 => 14
// 24 => 16
// 25 => 18
// 26 => 20
// 27 => 22
// 28 => 24
// 29 => 26
// 30 => 28
// 31 => 30
// 32 => 32
// 33 => 2
// ...
