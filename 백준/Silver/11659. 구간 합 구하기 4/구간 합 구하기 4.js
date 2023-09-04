function solution(numbers, ranges) {
    // 누적합을 이용한 구간합 구하기
    // prefixSum = cumulativeSum[end] - cumulativeSum[start - 1]

    //  5  4  3  2  1
    //  5  9 12 14 15
    // 위의 예시에서 두번째(4)부터 네번째(2)의 구간합을 구하려면:
    //  9 = 4 + 3 + 2
    //  9 = 14 - 5

    const cumulativeSum = [0];
    numbers.forEach((value, index) => (cumulativeSum[index + 1] = (cumulativeSum[index] ?? 0) + value));

    const prefixSum = ranges.map(([start, end]) => cumulativeSum[end] - cumulativeSum[start - 1]);
    return prefixSum;
}

const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const args = input.split('\n');
args.shift();
const numbers = args.shift().split(' ').map(Number);
const ranges = args.map((string) => string.split(' ').map(Number));

const output = solution(numbers, ranges).join('\n');
console.log(output);
