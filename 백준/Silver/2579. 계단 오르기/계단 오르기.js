// DP
function solution(length, steps) {
    // 각 계단을 마지막 계단으로 가정할 때 구할 수 있는 최댓값을 저장(메모이제이션)한다.
    // 그리고 다음 계단을 밟으면서 각 계단에 저장해둔 최댓값을 재사용해 계산한다.
    // https://sundries-in-myidea.tistory.com/22

    // steps = [10, 20, 15, 25, 10, 20]
    // cache = [10, 30, 35, 55, 65, 75]

    const cache = [];
    cache[0] = steps[0];
    cache[1] = steps[0] + steps[1];
    cache[2] = Math.max(steps[0] + steps[2], steps[1] + steps[2]);
    for (let i = 3; i < length; i += 1) {
        cache[i] = Math.max(cache[i - 2] + steps[i], cache[i - 3] + steps[i - 1] + steps[i]);
    }

    return cache[length - 1];
}

const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const [length, ...steps] = input.split('\n').map(Number);

const output = solution(length, steps);
console.log(output);
