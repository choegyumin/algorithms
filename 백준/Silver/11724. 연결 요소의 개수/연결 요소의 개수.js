// DFS
function solution(dotsLength, linesLength, lines) {
    const graph = lines.reduce((acc, [a, b]) => {
        if (acc[a] == null) acc[a] = [];
        if (acc[b] == null) acc[b] = [];
        acc[a].push(b);
        acc[b].push(a);
        return acc;
    }, {});
    const dots = Object.keys(graph).map(Number);

    // 연결 요소의 수 (이어진 정점이 `1-2-5 | 3-4-6 | 7`이라면, 연결 요소의 수는 3)
    let count = dotsLength - dots.length;
    const visited = new Set();

    // 방문하지 않은 정점을 발견하면 새로운 연결 요소라고 판단해 카운팅하고,
    // DFS를 이용해 연결된 모든 정점을 방문 (DFS라 하나의 연결 요소가 완성된 후 다음 forEach callback을 실행)
    dots.forEach((dot) => {
        if (visited.has(dot)) return;
        count += 1;
        dfs(dot);
    });

    function dfs(dot) {
        if (visited.has(dot)) return;
        visited.add(dot);
        graph[dot]?.forEach((dot) => dfs(dot));
    }

    return count;
}

const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const args = input.split('\n');
const [dotsLength, linesLength] = args.shift().split(' ').map(Number);
const lines = args.map((line) => line.split(' ').map(Number));

const output = solution(dotsLength, linesLength, lines);
console.log(output);
