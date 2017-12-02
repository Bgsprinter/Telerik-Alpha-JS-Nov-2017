const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;


const n = +gets();
const array = Array.from({
    length: n,
});

for (let i = 0; i < n; i += 1) {
    array[i] = i * 5;
    print(array[i]);
}
