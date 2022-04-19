const fs = require('fs')
const path = require('path')

const getProductFromFile = (cb)=>{
    const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json')
        fs.readFile(p,(err, filecontent)=>{
            if(err)cb([])
            cb(JSON.parse(filecontent))
    })
}

module.exports = class product{
    constructor(t){
        this.title = t
    }
    save(){
        const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json')
        getProductFromFile((products)=>{
            fs.readFile(p, (err, filecontent)=>{
                products.push(this)
                fs.writeFile(p, JSON.stringify(products), (err)=>{
                    console.log(err, 'Reported Error')
                })
            })
        })
        
    }
    static fetchAll(cb){
        getProductFromFile(cb)
    }
}