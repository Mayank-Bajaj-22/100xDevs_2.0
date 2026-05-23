// function calculateArithmetic(a, b, arithmeticFinalFunction) {
//     let result = arithmeticFinalFunction(a, b);
//     return result;
// }

// function sum(a, b) {
//     return a + b;
// }

// const value = calculateArithmetic(1, 2, sum);
// console.log(value)

function square(n) {
    return n * n;
}

function cube(n) {
    return n * n * n;
}

function sumOfSquare(a, b) {
    const val1 = square(a);
    const val2 = square(b);
    return val1 + val2;
}

function sumOfCube(a, b) {
    const val1 = cube(a);
    const val2 = cube(b);
    return val1 + val2;
}

// console.log(sumOfCube(1, 2))
// console.log(sumOfSquare(1, 2))

function sumOfAny (a, b, callback) {
    const val1 = callback(a);
    const val2 = callback(b);
    return val1 + val2
}

console.log(sumOfAny(1, 2, square))
console.log(sumOfAny(1, 2, cube))