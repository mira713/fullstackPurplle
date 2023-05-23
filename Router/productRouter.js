const express = require("express");
const productRouter = express.Router();
const { ProductModel } = require('../model/productModel');
require('dotenv').config();


productRouter.get('/', (req, res) => {
    res.send('hello from inside the product-router')

})

productRouter.post('/add', async (req, res) => {
    let body = req.body
    try {
        const user = new ProductModel(body)
        await user.save();
        res.send('product added')
    } catch (e) {
        res.send(e.message)
    }
})

productRouter.get('/get',async(req,res)=>{
    try{
        const data = await ProductModel.find();
        res.send(data)
    }catch(e){
        res.send(e.message)
    }
})

module.exports = {
    productRouter
}
