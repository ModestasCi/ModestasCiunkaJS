const arrayLength = Math.floor(Math.random() * 11) + 20;
const numArray = [];

for (let i = 0; i < arrayLength; i++) {
    const randomNum = Math.floor(Math.random() * 21) + 10;
}

let largestNum = numArray[0];

for (let i = 1; i < numArray.length; i++) {
    if (numArray[i] > largestNum) {
        largestNum = numArray[i];
    }
}

console.log(numArray);
console.log(`Didžiausias skaičius yra ${largestNum}.`); 
