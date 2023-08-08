// BFS
function solution(computerLength, connectionLength, connections) {
    const graph = connections.reduce((acc, [a, b]) => {
        if (acc[a] == null) acc[a] = [];
        if (acc[b] == null) acc[b] = [];
        acc[a].push(b);
        acc[b].push(a);
        return acc;
    }, {});

    // 항상 1번 컴퓨터에서 시작
    const start = 1;
    if (graph[start] == null) return 0;

    const queue = [start];
    const visited = new Set();
    let count = -1;

    while (queue.length) {
        const current = queue.shift();
        if (visited.has(current)) continue;
        visited.add(current);
        count += 1;
        graph[current].forEach((it) => queue.push(it));
    }

    return count;
}

const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const args = input.split('\n');
const computerLength = Number(args.shift());
const connectionLength = Number(args.shift());
const connections = args.map((it) => it.split(' ').map(Number));

const output = solution(computerLength, connectionLength, connections);
console.log(output);
