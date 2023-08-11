/**
 * 문제의 정답은 분할 정복으로 제1·2·3사분면을 제거하는 것.
 * 하지만 아래의 답은 수학적 계산으로 제1·2사분면을 먼저 제거한 후 제3사분면을 제거함.
 *
 * 지문에는 알고리즘이 강제되는 내용이 없고 테스트 케이스를 모두 통과하므로 정답으로 볼 수 있지만,
 * 답변 제출 시 숨겨진 테스트 케이스에서 실패함. (`5 22 22` 입출력 등)
 *
 * 고로 지문보다 문제 유형(출제 의도)에 따라 정해진 대로 풀어야 하는 전형적인 낚시 문제.
 */
function solution(expo, row, col) {
    // 전체, 사분면, 블록(Z)의 길이
    const length = Math.pow(2, expo);
    const quadLength = length / 2;
    const blockLength = 2;

    // 사분면, 블록(Z)의 정사각형 크기
    const quadSize = Math.pow(quadLength, 2);
    const blockSize = Math.pow(blockLength, 2);

    let count = 0;

    // (col, row)가 어느 사분면에 있는지 확인
    const rowQuad = Math.floor(row / quadLength);
    const colQuad = Math.floor(col / quadLength);

    // (col, row)가 사분면 안에서 어느 블록에 있는지 확인
    const rowBlock = Math.floor((row % quadLength) / blockLength);
    const colBlock = Math.floor((col % quadLength) / blockLength);

    // (col, row)가 블록 안에서 어느 칸에 있는지 확인
    const rowSlot = row % blockLength;
    const colSlot = col % blockLength;

    // 상단과 좌측에 있는 사분면들의 크기를 더함
    count += rowQuad * quadSize * 2;
    count += colQuad * quadSize;

    // 사분면 안에서 상단과 좌측에 있는 블록들의 크기를 더함
    count += rowBlock * blockSize * (quadLength / blockLength);
    count += colBlock * blockSize;

    // 블록 안에서 상단과 좌측에 있는 칸들의 크기를 더함
    count += rowSlot * 2;
    count += colSlot;

    return count;
}

const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const [expo, row, col] = input.split(' ').map(Number);

const output = solution(expo, row, col);
console.log(output);
