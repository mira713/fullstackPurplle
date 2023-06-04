const express = require('express');
require('dotenv').config();
const {connection}= require('./config/db')
const {userRouter} = require('./Router/userRouter')
const {productRouter} = require('./Router/productRouter');
const {authenticate} = require('./middleware/authenticate');
const cors = require('cors');
const app = express();


app.use(cors({
    origin:"*"
}))
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('welcome to linkedin')
});

app.use('/users',userRouter)
app.use('/product', productRouter)
app.use(authenticate);
// app.use("/posts",postsRouter)

// let port = process.env.port

// app.listen(port,async()=>{
//     await connection
//     console.log(`port running on ${port}`)
//     console.log('connected to db')
// })

app.listen(process.env.PORT,async()=>{
    try {
        await connection
        console.log("Connected to DB")
    } catch (error) {
        console.log(error)
    }
    console.log("Server is running on port number",process.env.PORT)
})