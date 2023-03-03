function pirminisSkaicius(num) {
    if (typeof num !== 'number' || num <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(pirminisSkaicius(2));
console.log(pirminisSkaicius(17));
console.log(pirminisSkaicius(27));
console.log(pirminisSkaicius('sveikutis'));
console.log(pirminisSkaicius(-7));