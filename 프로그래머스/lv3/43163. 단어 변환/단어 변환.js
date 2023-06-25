// BFS
function solution(begin, target, words) {
    if (!words.includes(target)) return 0;

    const start = { word: begin, count: 0 };
    const queue = [start];
    const visited = new Set();

    const isReplaceable = (from, to) => {
        let count = 0;
        const length = Math.max(from.length, to.length);
        for (let i = 0; i < length; i++) {
            if (from[i] === to[i]) continue;
            count += 1;
        }
        return count === 1;
    };

    while (queue.length) {
        const item = queue.shift();
        visited.add(item.word);

        if (item.word === target) return item.count;

        for (let i = 0; i < words.length; i++) {
            const nextWord = words[i];
            if (visited.has(nextWord)) continue;
            if (!isReplaceable(item.word, nextWord)) continue;
            queue.push({ word: nextWord, count: item.count + 1 });
        }
    }

    return 0;
}
