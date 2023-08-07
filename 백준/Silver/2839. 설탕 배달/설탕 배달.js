// Greedy
function solution(sugar) {
    const largeBag = 5;
    const smallBag = 3;

    let count = 0;

    // 5kg 봉지로 나누어떨어지지 않는 경우 3kg 봉지를 하나씩 추가 (3kg 봉지에 먼저 담고 남은 걸 5kg 봉지에 담음)
    while (sugar >= 0) {
        if (sugar % largeBag === 0) {
            count += sugar / largeBag;
            sugar = 0;
            break;
        }

        count += 1;
        sugar -= smallBag;
    }

    return sugar < 0 ? -1 : count;
}

const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const sugar = Number(input);

const output = solution(sugar);
console.log(output);
