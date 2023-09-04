// 힙 자료구조의 형태는 완전 이진 트리임
// 우선순위 큐와 같이 최솟값, 최대값을 빠르게 찾아야 하는 알고리즘 구현에 사용됨
// 최소 힙은 부모가 자식보다 작고, 최대 힙은 부모가 자식보다 큼
class MinHeap {
    constructor() {
        // 0-based indexing
        this.heap = [];
    }

    // 완전 이진 트리는 메서드에서 보듯, 배열로 표현할 수 있음
    //    parent
    //   /      \
    // lChild  rChild
    #getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    #getLChildIndex(index) {
        return index * 2 + 1;
    }

    #getRChildIndex(index) {
        return index * 2 + 2;
    }

    #swap(i1, i2) {
        [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]];
    }

    #bubbleUp(index) {
        while (true) {
            const parentIndex = this.#getParentIndex(index);

            if (index <= 0 || this.heap[parentIndex] <= this.heap[index]) break;

            this.#swap(index, parentIndex);
            index = parentIndex;
        }
    }

    #sinkDown(index) {
        while (true) {
            const heapLength = this.heap.length;
            const lChildIndex = this.#getLChildIndex(index);
            const rChildIndex = this.#getRChildIndex(index);
            let smallestIndex = null;

            if (lChildIndex < heapLength && this.heap[lChildIndex] < this.heap[index]) {
                smallestIndex = lChildIndex;
            }
            if (rChildIndex < heapLength && this.heap[rChildIndex] < this.heap[index]) {
                if (smallestIndex === null || this.heap[rChildIndex] < this.heap[smallestIndex]) {
                    smallestIndex = rChildIndex;
                }
            }

            if (smallestIndex === null) break;

            this.#swap(index, smallestIndex);
            index = smallestIndex;
        }
    }

    insert(value) {
        this.heap.push(value);
        this.#bubbleUp(this.heap.length - 1);
    }

    extract() {
        if (this.heap.length <= 1) return this.heap.pop();
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.#sinkDown(0);
        return min;
    }
}

function solution(length, commands) {
    const minHeap = new MinHeap();
    return commands.reduce((result, [method, number]) => {
        if (method === 'insert') minHeap.insert(number);
        else result.push(minHeap[method](number) ?? 0);
        return result;
    }, []);
}

const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const args = input.split('\n');
const length = args.shift();
const commands = args.map((arg) => {
    const numbar = Number(arg);
    return numbar > 0 ? ['insert', numbar] : ['extract', undefined];
});

const output = solution(length, commands).join('\n');
console.log(output);
