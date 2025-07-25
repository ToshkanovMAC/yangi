const mongoose = require('mongoose')
const joi = require('joi')

const ProductSchema = new mongoose.Schema({
    name: String,
    image: String,
    price: Number,
    category:{
        type: mongoose.Types.ObjectId,
        ref: "Category",
    }
})


const Product = mongoose.model("products", ProductSchema)

const productValidator = joi.object({
    name: joi.string().required(),
    image: joi.string().required(),
    price: joi.number().max(10000).min(1),
    category: joi.required()
})

module.exports = {Product, productValidator}