const express = require('express')
const { products } = require('./02-express-tutorial/data')
const app = express()

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const { id, name, image } = product
        return { id, name, image }
    })
    res.json(newProducts)

})
app.get('/api/products/1', (req, res) => {
    const singleProduct = products.find((product) => product.id === 1)
    res.json(singleProduct)
})
app.listen(5000, () => {
    console.log('listening on port 5000')
})