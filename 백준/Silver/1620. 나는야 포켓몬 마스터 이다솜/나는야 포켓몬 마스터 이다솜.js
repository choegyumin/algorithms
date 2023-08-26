function solution(monstersLength, questionsLength, monsters, questions) {
    const monsterNameMap = new Map(monsters.map((monster, index) => [index + 1, monster]));
    const monsterNoMap = new Map(monsters.map((monster, index) => [monster, index + 1]));

    return questions.map((question) =>
        typeof question === 'number' ? monsterNameMap.get(question) : monsterNoMap.get(question),
    );
}

const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const args = input.split('\n');

const [monstersLength, questionsLength] = args[0].split(' ').map(Number);
const monsters = [];
const questions = [];

for (let i = 1; i < 1 + monstersLength; i += 1) {
    const string = args[i];
    monsters.push(string);
}
for (let i = 1 + monstersLength; i < 1 + monstersLength + questionsLength; i += 1) {
    const string = args[i];
    const number = Number(string);
    questions.push(Number.isNaN(number) ? string : number);
}

const output = solution(monstersLength, questionsLength, monsters, questions).join('\n');
console.log(output);
