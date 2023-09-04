// BFS
function solution(start, dest) {
    const min = 0;
    const max = 100000;
    const queue = [[start, 0]];
    const visited = new Map();

    while (queue.length > 0) {
        const [point, time] = queue.shift();
        if (point === dest) return time;

        const nextTime = time + 1;
        [point - 1, point + 1, point * 2].forEach((nextPoint) => {
            if (nextPoint < min || nextPoint > max) return;
            if (visited.has(nextPoint) && visited.get(nextPoint) <= nextTime) return;
            queue.push([nextPoint, nextTime]);
            visited.set(nextPoint, nextTime);
        });
    }
}

const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const [start, dest] = input.split(' ').map(Number);

const output = solution(start, dest);
console.log(output);
