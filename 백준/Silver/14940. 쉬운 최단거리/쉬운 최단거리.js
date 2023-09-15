// BFS
function solution(rowsLength, colsLength, map) {
    const emptySpace = -1;
    const wallSpace = 0;
    const goalSpace = 2;

    const distanceMap = [];
    const goalCoord = {};

    for (let y = 0; y < rowsLength; y += 1) {
        // 없는 공간(도달할 수 없는 위치) 값으로 초기화
        distanceMap.push(new Array(colsLength).fill(emptySpace));

        for (let x = 0; x < colsLength; x += 1) {
            // 목표 지점의 (x, y)를 구함
            if (map[y][x] === goalSpace) {
                goalCoord.x = x;
                goalCoord.y = y;
            }
            // 벽(갈 수 없는 땅)을 표시
            if (map[y][x] === wallSpace) {
                distanceMap[y][x] = 0;
            }
        }
    }

    const queue = [{ ...goalCoord, distance: 0 }];

    while (queue.length > 0) {
        // 범위 초과 시 과정 생략
        const { x, y, distance } = queue.shift();
        if (x < 0 || x >= colsLength || y < 0 || y >= rowsLength) continue;

        // 벽(갈 수 없는 땅)이라면 과정 생략
        const path = map[y][x];
        if (path === wallSpace) continue;

        // 이미 방문했고 측정했던 거리보다 멀다면 최단 거리가 아니므로 과정 생략
        const visitedDistance = distanceMap[y][x];
        const visited = visitedDistance !== emptySpace;
        if (visited && distance >= visitedDistance) continue;

        distanceMap[y][x] = distance;
        const nextDistance = distance + 1;

        queue.push({ x, y: y - 1, distance: nextDistance }); // top
        queue.push({ x: x + 1, y, distance: nextDistance }); // right
        queue.push({ x, y: y + 1, distance: nextDistance }); // bottom
        queue.push({ x: x - 1, y, distance: nextDistance }); // left
    }

    return distanceMap;
}

const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const args = input.split('\n');
const [rowsLength, colsLength] = args.shift().split(' ').map(Number);
const map = args.map((string) => string.split(' ').map(Number));

const output = solution(rowsLength, colsLength, map)
    .map((row) => row.join(' '))
    .join('\n');
console.log(output);
