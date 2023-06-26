// Brute Force
function solution(n, m, board) {
    const size = 8;
    const blackFirstRow = 'BWBWBWBW';
    const whiteFirstRow = 'WBWBWBWB';
    const blackFirstBoard = [
        blackFirstRow,
        whiteFirstRow,
        blackFirstRow,
        whiteFirstRow,
        blackFirstRow,
        whiteFirstRow,
        blackFirstRow,
        whiteFirstRow,
    ];
    const whiteFirstBoard = [
        whiteFirstRow,
        blackFirstRow,
        whiteFirstRow,
        blackFirstRow,
        whiteFirstRow,
        blackFirstRow,
        whiteFirstRow,
        blackFirstRow,
    ];

    const check = (xStart, yStart) => {
        let blackFirstCount = 0;
        let whiteFirstCount = 0;
        for (let y = yStart; y < yStart + size; y += 1) {
            for (let x = xStart; x < xStart + size; x += 1) {
                const square = board[y][x];
                if (square !== blackFirstBoard[y - yStart][x - xStart]) blackFirstCount += 1;
                if (square !== whiteFirstBoard[y - yStart][x - xStart]) whiteFirstCount += 1;
            }
        }
        return Math.min(blackFirstCount, whiteFirstCount);
    };

    const result = [];
    for (let yStart = 0; yStart + size <= n; yStart += 1) {
        for (let xStart = 0; xStart + size <= m; xStart += 1) {
            result.push(check(xStart, yStart));
        }
    }

    return Math.min(...result);
}

const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const inputRows = input.split('\n');

const [n, m] = inputRows.shift().split(' ').map(Number);
const board = inputRows;

const output = solution(n, m, board);
console.log(output);
