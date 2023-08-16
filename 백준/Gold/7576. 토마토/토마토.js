// BFS
function solution(colSize, rowSize, box) {
    const queue = [];
    let days = 0;
    let remains = colSize * rowSize;

    // 시작점이 될 익은 토마토(1)와 카운트에서 제외할 빈칸(-1)을 탐색
    box.forEach((tomatoes, y) => {
        tomatoes.forEach((tomato, x) => {
            if (tomato === 1) queue.push({ x, y, days: 0 });
            else if (tomato === -1) remains -= 1;
        });
    });

    // 시간 초과로 `queue.shift()` 대신 index로 접근
    let index = 0;
    while (queue.length > index) {
        const current = queue[index];
        index += 1;
        remains -= 1;
        days = current.days;

        const directions = [
            { x: current.x, y: current.y - 1 }, // top
            { x: current.x, y: current.y + 1 }, // bottom
            { x: current.x - 1, y: current.y }, // left
            { x: current.x + 1, y: current.y }, // right
        ];

        // 토마토의 상하좌우에 있는 익지 않은 토마토(0)를 익히고 다음 날로 넘어감
        directions.forEach(({ x, y }) => {
            if (box[y]?.[x] == 0) {
                box[y][x] = 1;
                queue.push({ x: x, y: y, days: days + 1 });
            }
        });
    }

    return remains > 0 ? -1 : days;
}

const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const args = input.split('\n');
const [colSize, rowSize] = args.shift().split(' ').map(Number);
const box = args.map((it) => it.split(' ').map(Number));

const output = solution(colSize, rowSize, box);
console.log(output);
