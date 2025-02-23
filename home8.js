
let string = "Wonderful Joyful Happiness Time Task Apple";

const patern = /\b[^Aa\s]{6,}\b/g;
const matches = string.match(patern);
console.log(matches);


const patern2 = /\b[^a\s]{6,}\b/gi;
const matches2 = string.match(patern2);
console.log(matches2);



