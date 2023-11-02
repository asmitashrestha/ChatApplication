const express = require('express')
const dotenv = require('dotenv')
const chats = require('./data/data')

const app = express()
dotenv.config()

const PORT = process.env.PORT || 8000

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

const server = app.listen(8000,()=>console.log(`🗨️ servers on port ${PORT}`))

