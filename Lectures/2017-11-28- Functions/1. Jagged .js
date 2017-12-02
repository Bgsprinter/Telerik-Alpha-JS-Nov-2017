const numbers = [1, 2, 3, 1, 2, 3, 4, 5, 1, 2, 11];
const groups = [];
const base = 3;
// 3 way shown pls see video

for (const number of numbers) {
    groups[number % base] = groups[number % base] || [];
    groups[number % base].push(number);
}

console.log(groups);


