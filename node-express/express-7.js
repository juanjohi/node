const express = require('express')
const app = express()
let { people } = require('./02-express-tutorial/data')
app.use(express.static('./02-express-tutorial/methods-public'))

app.use(express.urlencoded({ extended: false }))

app.get('/api', (req, res) => {
    res.status(200).json({ success: true, data: people })
})

app.post('/login', (req, res) => {
    console.log(req.body)
    const { name } = req.body
    if (name) {
        res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send('Please fill the required fields')
})


app.listen(5000, () => {
    console.log('server listening on port 5000');
})