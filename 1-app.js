const { createReadStream } = require('fs')
const http = require('http')

const server = http.createServer((req, res) => {
    const fileStream = createReadStream('./content/first.txt', 'utf-8')
    fileStream.on('open', () => {
        fileStream.pipe(res)
    })
    fileStream.on('err', (err) => {
        res.end(err)
    })
})

server.listen(4000)