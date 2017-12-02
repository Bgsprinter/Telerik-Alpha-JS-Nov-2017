const arr = [1, 2, 3, 4, 5];
const names = ['Jane', 'John', 'Gosho'];

console.log(names[0][1]);


const a1 = Array.from({
    0: 'John',
    length: 6,
    1: 'Kalin',
    5: 'Toni',
});

console.log(a1);

for (const key in names) {
    console.log(key);
}

for (const name of names) {
    console.log(name);
}
