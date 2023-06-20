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

app.get('/api/products/:productID', (req, res) => {
    const { productID } = req.params
    const singleProduct = products.find(
        (product) => product.id === Number(productID))

    if (!singleProduct) {
        return res.status(400).send('Product does not exist')
    }
    res.json(singleProduct)
})

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    console.log(req.params)
    res.send('hello world')
})


app.listen(5000, () => {
    console.log('listening on port 5000')
})