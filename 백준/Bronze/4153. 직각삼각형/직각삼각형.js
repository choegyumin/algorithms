function solution(triangles) {
    const result = triangles.map((triangle) => {
        // 제일 긴 값이 빗변(직각을 마주하는, 직각과 인접하지 않은 변)
        const [c1, c2, h] = triangle.sort((a, b) => a - b);

        // 수식을 통과하면 직각삼각형
        // c1^2 + c2^2 = h^2
        const right = c1 ** 2 + c2 ** 2 === h ** 2;

        return right ? 'right' : 'wrong';
    });

    return result;
}

const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const args = input.split('\n');
args.pop();
const triangles = args.map((arg) => arg.split(' ').map(Number));

const output = solution(triangles).join('\n');
console.log(output);
