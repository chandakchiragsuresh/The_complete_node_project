const path = require('path')

const products = ['PUMA', 'NIKE', 'PEPE JEANS']

//shop controller
exports.shopController = (req, res)=>{
    res.render('shop', {prods:products})
}

//admin controller
exports.getAddController = (req, res)=>{
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'))
}

exports.postAddController = (req, res)=>{
    const productName = req.body.productName
    products.push(productName)
    res.send(productName)
} 



exports.products = products