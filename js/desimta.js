function phoneNumber(arr) {
    if (!Array.isArray(arr) || arr.length !== 10) {
        return 'Neteisingas telefono numeris';
    }
    const areaCode = arr.slice(0, 3).join('');
    const prefix = arr.slice(3, 6).join('');
    const lineNumber = arr.slice(6).join('');
    return `(${areaCode}) ${prefix}-${lineNumber}`;
}

console.log(phoneNumber([3, 7, 0, 6, 7, 8, 9, 0, 1, 2]));