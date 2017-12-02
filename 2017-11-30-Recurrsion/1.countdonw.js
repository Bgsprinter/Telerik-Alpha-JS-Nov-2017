const countDown = (n) => {
    console.log(n);
    if (n >= 1) {
        countDown(n - 1);
    }
}

countDown(5)
// console.log(countDown(5));