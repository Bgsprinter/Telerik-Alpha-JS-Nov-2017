// let numbers = [141, 123, 131, 47, 24, 22, 83, 34, ]

// let min = numbers[0];

// for (const number of numbers) {
//     min = Math.min(min, number);
// }
// console.log(min);


let minNumber = '';

function myArrayMin(numbers) {
    minNumber = Math.min.apply(null, numbers);
}
console.log(minNumber);

myArrayMin([141, 123, 131, 47, 24, 22, 83, 34]);
