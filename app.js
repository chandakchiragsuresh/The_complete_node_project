const express = require('express')
const admin = require('./routes/admin')
const adminRouter = admin.router
const shopRouter = require('./routes/shop')
const app = express()
const path = require('path')
const pug = require('pug')
const errorController = require('/The_Complete_NodeJS_Maximilian Schwarzmuller/controllers/errorController')


app.set('view engine', 'pug')//it will set global variable of node

app.set('views', 'views')//here first views is our global variable and we are setting up to views folder

app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin',adminRouter)

app.use(shopRouter)

app.use(errorController.getError)

app.listen(3000, ()=>{
    console.log('Server is up on port 3000!')
})