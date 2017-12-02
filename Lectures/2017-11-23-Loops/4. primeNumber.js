const number = 32;
let isPrime = true;

for (let divider = 2; divider <= Math.sqrt(number); divider += 1) {
    if (number % divider === 0) {
        isPrime = false;
    }
}
console.log(`${number} is prime -> ${isPrime}`);


