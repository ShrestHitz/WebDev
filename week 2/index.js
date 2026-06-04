const fs = require('fs');

const data = fs.readFileSync('a.txt', 'utf-8');
console.log(data);

const contents2 = fs.readFileSync("b.txt", "utf-8");
console.log(contents2);