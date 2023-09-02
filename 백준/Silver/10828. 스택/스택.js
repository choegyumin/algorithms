class Stack {
    constructor() {
        this.values = [];
    }

    push(value) {
        this.values.push(value);
    }

    pop() {
        return this.empty() ? -1 : this.values.pop();
    }

    size() {
        return this.values.length;
    }

    empty() {
        return this.size() > 0 ? 0 : 1;
    }

    top() {
        return this.empty() ? -1 : this.values[this.values.length - 1];
    }
}

function solution(length, commands) {
    const stack = new Stack();
    return commands.reduce((result, [method, number]) => {
        const value = stack[method](number);
        if (value != null) result.push(value);
        return result;
    }, []);
}

const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const args = input.split('\n');
const length = args.shift();
const commands = args.map((value) => {
    const [method, arg] = value.split(' ');
    return [method, arg != null ? Number(arg) : undefined];
});

const output = solution(length, commands).join('\n');
console.log(output);
