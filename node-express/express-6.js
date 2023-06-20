const express = require('express')
const app = express()
const logger = require('./logger-module')
const authorize = require('./authorize')

app.use([logger, authorize])

app.get('/', (req, res) => {
    res.send('Home')
})

app.get('/about', (req, res) => {
    res.send('About')
})

app.get('/api', (req, res) => {
    res.send('Api')
})

app.get('/api/products', (req, res) => {
    res.send('Products')
})

app.listen(5000, () => {
    console.log('Server listening on port 5000');
})