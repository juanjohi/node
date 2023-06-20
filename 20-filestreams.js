// const { writeFileSync, readFileSync } = require('fs')

// for (let i = 0; i < 1000; i++) {
//     writeFileSync('./content/big.txt', `Hello world ${i}\n`, { flag: 'a' })
// }

const { readFileSync, createReadStream } = require('fs')
const http = require('http')

const server = http.createServer((req, res) => {
    // const first = readFileSync('./content/big.txt', 'utf-8')
    // res.end(first)

    const fileStream = createReadStream('./content/big.txt', 'utf-8')
    fileStream.on('open', () => {
        fileStream.pipe(res)
    })
    fileStream.on('err', (err) => {
        res.end(err)
    })
})
server.listen(5000)