// Divide and Conquer
function solution(expo, row, col) {
    // 사분면은 아래와 같이 표현
    // 2 1
    // 3 4

    // 지도를 4등분하고 ↘︎ 방향으로 조건에 따라 줄여나감
    function calc(size, row, col) {
        // 크기가 2 미만일 경우 0을 반환해 재귀를 끝냄
        if (size < 2) return 0;

        const halfSize = size / 2;
        let count = 0;

        // row의 크기가 절반 이상일 경우 (col, row)는 지도의 하단에 위치
        // 상단 크기만큼의 row를 제거하고 count에 더함 (제1·2사분면 제거)
        if (row >= halfSize) {
            row -= halfSize;
            count += size * halfSize;
        }

        // col의 크기가 절반 이상일 경우 (col, row)는 지도의 우측에 위치
        // 좌측 크기만큼의 col을 제거하고 count에 더함 (제3사분면 제거)
        if (col >= halfSize) {
            col -= halfSize;
            count += halfSize * halfSize;
        }

        // 남은 지도를 기준으로 재귀 계산
        return count + calc(halfSize, row, col);
    }

    return calc(Math.pow(2, expo), row, col);
}

const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const [expo, row, col] = input.split(' ').map(Number);

const output = solution(expo, row, col);
console.log(output);
