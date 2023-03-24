const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Hello world')
    }
    if (req.url === '/about') {
        res.end('We are here for you')
    }
    res.end(`
    <H1>Ooops !</H1>
    <P> We can't locate your page</P>
    <a href = "/">Back home </a>
    `)
})

server.listen(5000)