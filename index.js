const express = require('express')
const mongoose = require('mongoose')
const app = express()

const CategoryRoute = require('./route/category')
const ProductRoute = require('./route/product')


mongoose.connect("mongodb://127.0.0.1:27017/forTest").then(()=>{console.log("connected to DB")}).catch((e=>console.log(e.message)))


app.use(express.json())

app.use("/category", CategoryRoute)
app.use("/products", ProductRoute)

app.listen(3000, ()=>{console.log("server started on 3000 port")})