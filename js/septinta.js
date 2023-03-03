const arrayLength = 100;
const letterArray = [];

for (let i = 0; i < arrayLength; i++) {
    const randomIndex = Math.floor(Math.random() * 4);
    const randomLetter = ["A", "B", "C", "D"][randomIndex];
    letterArray.push(randomLetter);
}

let countA = 0;
let countB = 0;
let countC = 0;
let countD = 0;

for (let i = 0; i < letterArray.length; i++) {
    if (letterArray[i] === "A") {
        countA++;
    } else if (letterArray[i] === "B") {
        countB++;
    } else if (letterArray[i] === "C") {
        countC++;
    } else if (letterArray[i] === "D") {
        countD++;
    }
}

console.log(letterArray);
console.log(`A skaičius: ${countA}`);
console.log(`B skaičius: ${countB}`);
console.log(`C skaičius: ${countC}`);
console.log(`D skaičius: ${countD}`);
