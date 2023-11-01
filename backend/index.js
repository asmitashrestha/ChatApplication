const express = require('express')
const path = require('path')
const app = express()

app.get('/',(req,res)=>{
    res.send('API is running')
})

const server = app.listen(5000,()=>console.log(`🗨️ servers on port 5000`))

app.use(express.static(path.join(__dirname,'public')))