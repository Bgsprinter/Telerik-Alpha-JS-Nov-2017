const fact = (n) => {
    if (n === 0 || n === 1) {
        return 1;
    }
    const factN1 = fact(n - 1);
    return n * factN1;
};
console.log(fact(5));
// console.log(fact(1<<20));
// console.log(fact(1<<10));
