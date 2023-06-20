const path = require('path')

console.log(`my path separator is ${path.sep}`);

const filePath = path.join('content', 'subcontent', 'text.txt')
console.log(filePath);

const fileBase = path.basename(filePath)
console.log(fileBase);

const absolute = path.resolve(__dirname, 'content', 'subcontent', 'text.txt') //or (__dirname, `${filePath}` or filePath)
console.log(absolute);