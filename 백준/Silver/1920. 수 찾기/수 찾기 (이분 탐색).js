// Binary Search
function solution(lengthN, listA, lengthM, listB) {
    // 이분 탐색은 탐색 대상이 정렬되어야 가능함
    listA.sort((a, b) => a - b);

    return listB.map((value) => {
        let found = false;

        let start = 0; // 탐색 대상의 처음
        let end = lengthN - 1; // 탐색 대상의 마지막 (listA.length - 1)

        while (start <= end) {
            let mid = Math.floor((start + end) / 2); // 탐색 대상의 중간
            const target = listA[mid];

            // 값이 탐색 대상의 중간값보다 작으면 탐색 범위를 앞의 절반으로 줄임
            if (value < target) {
                end = mid - 1;
                continue;
            }

            // 값이 탐색 대상의 중간값보다 크면 탐색 범위를 뒤의 절반으로 줄임
            if (value > target) {
                start = mid + 1;
                continue;
            }

            // 값이 탐색 대상의 중간값과 같다면 탐색 완료
            found = true;
            break;
        }

        return found ? 1 : 0;
    });
}

const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const args = input.split('\n');
const lengthN = Number(args[0]);
const listA = args[1].split(' ').map(Number);
const lengthM = Number(args[2]);
const listB = args[3].split(' ').map(Number);

const output = solution(lengthN, listA, lengthM, listB).join('\n');
console.log(output);
