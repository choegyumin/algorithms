// DFS
function solution(maps) {
    const xLength = maps[0]?.length ?? 0;
    const yLength = maps.length;

    let count = 0;

    // 배추(군집)의 시작점을 발견하면 카운팅하고, DFS를 이용해 군집을 제거(0으로 변환)
    for (let y = 0; y < maps.length; y += 1) {
        for (let x = 0; x < maps[y].length; x += 1) {
            if (maps[y][x]) count += 1;
            dfs(x, y);
        }
    }

    function dfs(x, y) {
        if (x < 0) return;
        if (y < 0) return;
        if (x >= xLength) return;
        if (y >= yLength) return;
        if (maps[y][x] === 0) return;

        maps[y][x] = 0;

        // top, right, bottom, left
        dfs(x, y - 1);
        dfs(x + 1, y);
        dfs(x, y + 1);
        dfs(x - 1, y);
    }

    return count;
}

const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const inputRows = input.split('\n');
inputRows.shift();

// 여러 개의 테스트 케이스가 한 번에 주어짐 (굳이...)
const mapsByTestCases = [];
while (inputRows.length) {
    const [m, n, k] = inputRows.shift().split(' ');
    const xLength = Number(m);
    const yLength = Number(n);
    const cabbageLength = Number(k);

    const maps = [];
    mapsByTestCases.push(maps);

    // 지도 초기화
    for (let y = 0; y < yLength; y += 1) {
        maps[y] = [];
        for (let x = 0; x < xLength; x += 1) {
            maps[y].push(0);
        }
    }

    // 지도에 배추 위치 입력
    for (let i = 0; i < cabbageLength; i += 1) {
        const [xString, yString] = inputRows.shift().split(' ');
        const x = Number(xString);
        const y = Number(yString);
        maps[y][x] = 1;
    }
}

const output = mapsByTestCases.reduce((output, maps) => {
    const result = solution(maps);
    return `${output}${result}\n`;
}, '');
console.log(output);
