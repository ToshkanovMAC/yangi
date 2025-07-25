const express = require('express')
const {Product, productValidator } = require('./../models/products')

const route = express.Router()

// route.get("/", async(req, res)=>{
//     try{
//         const newPrd = await Product.find()
//         res.status(200).json(newPrd)
//     }catch(e){res.status(400).json(e.message)}
// })

route.post("/", async(req, res)=>{
    try{
        const {value, error} = productValidator.validate(req.body)
        if(error){return res.json({message: error.details[0].message})}
        const newPrd = new Product(value)
        await newPrd.save()
        res.status(200).json(data)
    }catch(e){res.status(200).json(e.message)}
})

route.patch("/:id", async(req, res)=>{
    try{
        let data = req.body
        let {id} = req.params
        const newPrd = await Product.findByIdAndUpdate(id, data, {new: true})
        await newPrd.save()
    }catch(e){res.status(400).json(newPrd)}
})

route.delete("/:id", async(req, res)=>{
    try{
        let {id} = req.params
        const newPrd = Product.findByIdAndDelete(id)
    }catch(e){res.status(200).json(newPrd)}
})

route.get("/", async(req, res)=>{
    const {category, name, price, page =1, take= 10} = req.query
    const skip = (page - 1) * take
   
    try{
        let filter = {}
        if(category)filter.category = category
        if(name)filter.name = name
        if(price)filter.price = price
        const prd = await Product.find(filter).skip(skip).limit(take)
        res.status(200).json(prd)
    }catch(e){res.status(400).json(e.message)}
})


module.exports = route