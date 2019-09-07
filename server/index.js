const path = require('path')
const express = require('express')
const cors = require('cors')

const app = express()
const port = 3000

const categories = require('./../data/categories.json')
const products = require('./../data/products.json')

app.use(cors())
app.use('/images', express.static(path.resolve(__dirname, '../images')))

app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, './index.html')))

app.get('/products/highlighted', (req, res) => res.json(products.filter(item => item.highlight)))

app.get('/products/category/:id', (req, res) => res.json(products.filter(item => item.category === req.params.id)))

app.get('/products', (req, res) => res.json(products))

app.get('/categories', (req, res) => res.json(categories))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
