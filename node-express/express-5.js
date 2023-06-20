const express = require('express')
const app = express()
const { products } = require('./02-express-tutorial/data')

app.get('/api/v1/query', (req, res) => {
    const { search, limit } = req.query
    let sortedProducts = [...products]
    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if (sortedProducts.length < 1) {
        // res.status(200).send('your search does not match any products')
        return res.status(200).json({ success: true, data: [] })
    }
    res.json(sortedProducts)
})

app.listen(5000, () => {
    console.log('listening on port 5000');
})