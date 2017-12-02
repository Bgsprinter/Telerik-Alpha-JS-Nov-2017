const text = 'I am hungry! Hungry I am, and I am hungry!';
// const words = text.split(' ');
const words = text.split(/[ !,]/); // moje i s \ W|!|,\

console.log(words);
const wordsOccurances = {};
for (const word of words) {

}
wordsOccurances[word] += 1;


console.log(wordsOccurances);
