class LinkedListItem {
    constructor(value) {
        this.value = value;
        this.prev = undefined;
        this.next = undefined;
        this.list = undefined;
    }
}

class LinkedList {
    constructor() {
        this.first = undefined;
        this.last = undefined;
        this.size = 0;
    }

    append(value) {
        const target = value instanceof LinkedListItem ? value : new LinkedListItem(value);

        if (target.list) throw new Error(`${target.value} Item already belongs to another list`);

        target.prev = undefined;
        target.next = undefined;
        target.list = this;

        if (this.size === 0) {
            this.first = target;
        } else {
            target.prev = this.last;
            this.last.next = target;
        }

        this.last = target;
        this.size += 1;

        return target;
    }

    removeFirst() {
        if (this.size === 0) return;

        const target = this.first;

        this.first = target.next;
        if (this.first instanceof LinkedListItem) this.first.prev = undefined;
        this.size -= 1;

        target.prev = undefined;
        target.next = undefined;
        target.list = undefined;

        return target;
    }

    static from(iterable, mapFn) {
        const list = new LinkedList();
        Array.from(iterable, (value, index) => {
            const itemValue = mapFn ? mapFn(value, index) : value;
            list.append(itemValue);
        });
        return list;
    }

    /* ... */
}

// Queue
function solution(length) {
    // 시간 초과로 Array 대신 LinkedList 구현
    const cards = LinkedList.from({ length }, (value, index) => index + 1);
    while (cards.size > 1) {
        cards.removeFirst();
        cards.append(cards.removeFirst());
    }
    return cards.first.value;
}

const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const length = Number(input);

const output = solution(length);
console.log(output);
