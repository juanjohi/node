//flavours in writing modules;;
//1 deconstruction
const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')
console.log(first, second);


writeFileSync('./content/result-sync.txt', `Here is the result:${first}, ${second}`)
const third = readFileSync('./content/result-sync.txt', 'utf-8')
console.log(third);
//2 normalmethod
// const fs = require('fs')
// const first = fs.readFileSync('./content/first.txt', 'utf-8')
// const second = fs.readFileSync('./content/second.txt', 'utf-8')
// console.log(first, second);