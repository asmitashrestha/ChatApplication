const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const chats = require('./data/data')
const User = require('./Models/User')

const app = express()
dotenv.config()

mongoose.connect('mongodb://127.0.0.1:27017/asmita')
  .then(() => console.log('DB Connected!'))
  .catch(err=>console.log(err))

const PORT = process.env.PORT || 8000

app.get('/products',async(req,res)=>{
  let products =await User.find({}).limit(10)
 
    res.send({
      data:products
    })
  })




app.get('/',(req,res)=>{
    res.send('API is running')
})



app.get('/chats',(req,res)=>{
    res.send(chats)
})

app.get('/api/chats/:chatName',(req,res) =>{
    const singleChat = chats.find((m) => m.chatName=== req.params.chatName);
    if (singleChat) {
        res.send(singleChat);
    } else {
        res.status(404).send('Chat not found');
    }

})

const server = app.listen(8000,()=>console.log(`🗨️  servers on port ${PORT}`))






