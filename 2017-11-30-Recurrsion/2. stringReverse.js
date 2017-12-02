const reverseString = (str) => {
    if (str.length === 0 || str.length === 1) {
        return str;
    }
    // const [firstChar, ...rest] = str;
    const firstChar = str[0];
    const rest = str.slice(1);

    const reversed = reverseString(rest) + firstChar;
    return reversed;
};


console.log (reverseString(1 + '-'.repeat(1<<10) + 2));
console.log (reverseString('ala bala nica'));
console.log (reverseString('a'));
console.log (reverseString(''));
