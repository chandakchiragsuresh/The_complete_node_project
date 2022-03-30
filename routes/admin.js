const express = require('express')
const path = require('path')

const router = express.Router()

const bodyParser = require('body-parser')

router.use(bodyParser.urlencoded({extended : true}))

router.get('/add-product', (req, res)=>{
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'))
})

router.post('/product',(req, res)=>{
    const productName = req.body.productName
    res.send(productName)
})

module.exports = router