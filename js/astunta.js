function lygineSuma(a, b) {
    if (typeof a === 'number'
        && typeof b === 'number') {
        return a + b;
    } else if (Array.isArray(a) && Array.isArray(b)) {
        return a.length + b.length;
    } else if (typeof a === 'number'
        || typeof b === 'number'
        || !Array.isArray(a)
        || !Array.isArray(b)) {
        return "Suma nelyginė";
    }
}

console.log(lygineSuma(5, 7));
console.log(lygineSuma([1, 2, 3], [4, 5]));
console.log(lygineSuma(2, [1, 2, 3]));
console.log(lygineSuma([1, 2], "labukas"));