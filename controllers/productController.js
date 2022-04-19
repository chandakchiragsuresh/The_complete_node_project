const path = require('path')
const { fetchAll } = require('../models/product')
const Product = require('../models/product')

//shop controller
exports.shopController = (req, res)=>{
    const products = Product.fetchAll((products)=>{
        res.render('shop', {prods:products})
    })
}

//admin controller
exports.getAddController = (req, res)=>{
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'))
}

exports.postAddController = (req, res)=>{
    const productName = req.body.productName
    const product = new Product(productName)
    product.save()
    res.redirect('/')
} 
