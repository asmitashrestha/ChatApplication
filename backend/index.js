const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const chats = require('./data/data')
const User = require('./Models/User')
const userRoutes = require('./routes/userRoutes')
const { pageNotFound, errorHandlers } = require('./middleware/errorHandler')
const chatRoutes = require('./routes/chatRoutes')

const app = express()
dotenv.config()

require('./config/database')
app.use(cors())

app.use(express.json()) //global middleware
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

app.use('/user',userRoutes)
app.use('/chat',chatRoutes)

app.use(pageNotFound)
app.use(errorHandlers)

const server = app.listen(8000,()=>console.log(`🗨️  servers on port ${PORT}`))






