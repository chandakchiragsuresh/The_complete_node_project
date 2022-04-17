const express = require('express')

const path = require('path')

const router = express.Router()

const bodyParser = require('body-parser')

const productController = require('../controllers/productController')

router.use(bodyParser.urlencoded({extended : true}))

router.get('/add-product', productController.getAddController)

router.post('/product', productController.postAddController)

module.exports = {router:router}