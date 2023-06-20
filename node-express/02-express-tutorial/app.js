const express = require('express')()

//or 
//const express = require('express')
//const app = express()
//app.get(...callback and method)
//app.listen(...)

express.get('/', (req, res) => {
    console.log('client hit the resource');
    res.send('<h1>HomePage</h1>')
})

express.all('*', (req, res) => {
    res.status(404).send('<h1>Resource not Found</h1>')
    console.log('client hit wrong resource');
})

express.listen(5000, () => {
    console.log('Express listening on port 5000');
})