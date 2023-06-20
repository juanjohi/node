const { createServer } = require('http')
const { readFileSync } = require('fs')

const homepage = readFileSync('./index.html')
const styles = readFileSync('./style.css')
const logic = readFileSync('./browser.js')
const logo = readFileSync('./logo.svg')

const server = createServer((req, res) => {

    const url = req.url
    if (url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(homepage)
        console.log('client is on homepage');
        res.end()
    }

    if (url === '/styles.css') {
        res.writeHead(200, { 'content-type': 'text/css' })
        res.write(styles)
        console.log('client is accessing the stylesheet');
        res.end()
    }

    if (url === '/browser.js') {
        res.writeHead(200, { 'content-type': 'text/js' })
        res.write(logic)
        console.log('client is accessing the logic');
        res.end()
    }

    if (url === '/logo.svg') {
        res.writeHead(200, { 'content-type': 'image/svg/xml' })
        res.write(logo)
        console.log('client is accessing the logo');
        res.end()

    } else {
        res.writeHead(400, { 'content-type': 'text/html' })
        res.write('< h2 > Resource not found < /h2>')
        console.log('client using wrong resource');
        res.end()
    }
})
server.listen(4000)