const express = require('express')

const adminRouter = require('./routes/admin')
const shopRouter = require('./routes/shop')

const app = express()
const path = require('path')

app.use('/admin',adminRouter)

app.use(shopRouter)

app.use((req, res)=>{
    res.sendFile(path.join(__dirname, 'views', '404.html'))
})

app.listen(3000, ()=>{
    console.log('Server is up on port 3000!')
})