const fs = require('fs');

const data = 'Hello, World! I am writing to a file!';

fs.writeFile("4-file.txt", data, "utf-8", (err, data) => {
    if (err) throw err;
    console.log("The file has been written!")
})  