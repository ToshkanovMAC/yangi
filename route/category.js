const express = require('express')
const {Category, categoryValidation} = require('./../models/category')

const route = express.Router()


route.get("/", async(req, res)=>{
    try{
        const data = await Category.find()
        res.status(200).json(data)
    }catch(e){res.status(400).json(e.message)}
})

route.post("/", async(req, res)=>{
    try{
        let {value, error} = categoryValidation.validate(req.body)
        if(error){return res.json({message: error.details[0].message})}
        const newPrd = new Category(value)
        const saved = await newPrd.save()
        res.status(200).json(saved)
    }catch(e){res.status(400).json(e.message)}
})

route.delete("/:id", async(req, res)=>{
    try{
        const {id} = req.params
        const newPrd = await Category.findByIdAndDelete(id)
        res.status(200).json(newPrd)
    }catch(e){res.status(400).json(e.message)}
})




module.exports = route