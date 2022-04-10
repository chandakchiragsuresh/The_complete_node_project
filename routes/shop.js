const express = require('express')

const router = express.Router()

const path = require('path')

const productsData = require('./admin')

const admin = require('./admin')

const products = admin.products

router.get('/', (req, res)=>{
    //res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'))
    res.render('shop', {prods:products})
})

module.exports = router