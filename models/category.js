const mongoose = require("mongoose")
const joi = require('joi')
const CategorySchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true,
    },
    image: String,
})

const Category = mongoose.model("Category", CategorySchema)
const categoryValidation = joi.object({
    name: joi.string().required(),
    image: joi.string().required(),
});
module.exports = {Category, categoryValidation}