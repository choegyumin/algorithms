function solution(unheardLength, unseenLength, peoples) {
    const unheardSet = new Set();
    const unseenSet = new Set();

    for (let i = 0; i < unheardLength; i += 1) unheardSet.add(peoples[i]);
    for (let i = unheardLength; i < unheardLength + unseenLength; i += 1) unseenSet.add(peoples[i]);

    const unknown = [...unseenSet].filter((name) => unheardSet.has(name)).sort();
    return [unknown.length, ...unknown];
}

const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const args = input.split('\n');
const [unheardLength, unseenLength] = args.shift().split(' ').map(Number);
const peoples = args;

const output = solution(unheardLength, unseenLength, peoples).join('\n');
console.log(output);
