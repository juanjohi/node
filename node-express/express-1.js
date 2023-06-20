const express = require('express')
const app = express()
    //alternatively 
    //const express = require('express')()
    //express.get('url', callback + method )
    //express.listen(port, empty callback function + method or log)

app.get('/', (req, res) => {
    console.log('client hit the resource')
    res.status(200).send('<h1>Homepage</h1>')
})

app.get('*', (req, res) => {
    console.log('client hit the wrong resource')
    res.status(400).send('<h1>Resource not found</h1>')
})

app.listen(4000, () => {
    console.log('listening on port 4000')
})