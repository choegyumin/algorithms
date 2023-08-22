// Greedy
function solution(length, meetings) {
    const sortedMeetings = meetings.sort((a, b) => {
        return a[1] - b[1] || a[0] - b[0];
    });

    let current = 0;
    let count = 0;

    // start가 current와 같거나 큰 것 중에서 end가 가장 작은 것을 선택
    // (당장 시작하지 않더라도, 결과적으로 가장 빨리 끝나는 회의 선택)
    for (let i = 0; i < length; i += 1) {
        const [start, end] = sortedMeetings[i];
        if (current > start) continue;
        current = end;
        count += 1;
    }

    return count;
}

const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const args = input.split('\n');
const length = args.shift();
const meetings = args.map((item) => item.split(' ').map(Number));

const output = solution(length, meetings);
console.log(output);
