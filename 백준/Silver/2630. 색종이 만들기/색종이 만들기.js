// Divide and Conquer
function solution(n, map) {
    const color = { white: 0, blue: 1 };

    let whitesLength = 0;
    let bluesLength = 0;

    function dfs(size, row, col) {
        const uncuttable = size < 1;
        if (uncuttable) return;

        const halfSize = size / 2;
        const currentColor = map[row][col];

        let onlyOnePiece = true;
        for (let y = row; y < row + size; y += 1) {
            for (let x = col; x < col + size; x += 1) {
                if (currentColor !== map[y][x]) {
                    onlyOnePiece = false;
                    break;
                }
            }
        }

        // 색종이가 더 이상 나누어지지 않으면 탐색을 마침
        if (onlyOnePiece) {
            if (currentColor === color.white) whitesLength += 1;
            else if (currentColor === color.blue) bluesLength += 1;
            return;
        }

        // 색종이가 더 이상 나누어지지 않을 때까지 지도를 4등분해서 재귀 탐색
        dfs(halfSize, row, col);
        dfs(halfSize, row + halfSize, col);
        dfs(halfSize, row, col + halfSize);
        dfs(halfSize, row + halfSize, col + halfSize);
    }

    dfs(n, 0, 0);

    return [whitesLength, bluesLength];
}

const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const args = input.split('\n');
const n = Number(args.shift());
const map = args.map((string) => string.split(' ').map(Number));

const output = solution(n, map).join('\n');
console.log(output);
