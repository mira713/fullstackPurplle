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
    const page = req.query.page||0;
    try{
        const count = await ProductModel.find(req.query).countDocuments();
        const data = await ProductModel.find(req.query).skip(page*10).limit(10);
        res.send({
            message:'All product data',
            count:count,
            status:1,
            data:data,
            error:false,
        });
    }catch(e){
        res.send(e.message)
    }
})

module.exports = {
    productRouter
}
