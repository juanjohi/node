const express = require('express')
const app = express()
app.use(express.static('./public'))

app.all('*', (req, res) => {
    console.log('client is hiting the wrong resource');
    res.send('page not found')
})
app.listen(5000, () => {
    console.log('listening on port 5000');
})