// function mayankAsyncFunction(callback) {
//     // do some async logic here
//     callback("hi there!")
// }

// async function main() {
//     mayankAsyncFunction(function(value) {
//         console.log(value);
//     })
// }

// main()

// function mayankAsyncFunction() {
//     let p = new Promise(function(resolve) {
//         resolve("hi")
//     })
//     return p
// }

// function main() {
//     mayankAsyncFunction().then(function(value) {
//         console.log(value)
//     })
// }

// main()
// const fs = require('fs')

// let a = 1;
// console.log(a)

// fs.readFile("a.txt", 'utf-8', (err, data) => {
//     console.log("the data read from the file is")
//     console.log(data)
// })

// let ans = 0;
// for (let i=0; i<=10; i++) {
//     ans = ans + i;
// }
// console.log(ans)

function myOwnSetTimeoutFn(fn, duration) {
    setTimeout(fn, duration)
}

myOwnSetTimeoutFn(function() {
    console.log("hi there")
}, 1000)