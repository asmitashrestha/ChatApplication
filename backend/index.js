const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const chats = require('./data/data')
const User = require('./Models/User')
const userRoutes = require('./routes/userRoutes')
const { pageNotFound, errorHandlers } = require('./middleware/errorHandler')
const chatRoutes = require('./routes/chatRoutes')
const messageRoutes = require('./routes/messageRoutes')

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
app.use('/message',messageRoutes)

app.use(pageNotFound)
app.use(errorHandlers)

const server = app.listen(8000,()=>console.log(`🗨️  servers on port ${PORT}`))

const io = require("socket.io")(server, {
  pingTimeout: 50000,
  cors: {
    origin: "http://localhost:5173",
  }
})

io.on("connection",(socket)=>{
  console.log("Connected sucessfully to socket.io");

  socket.on("setup", (userData)=>{
    socket.join(userData._id)
    console.log(userData._id)
    socket.emit("connected!")
  })

  socket.on("join chat", (room)=>{
    socket.join(room)
    console.log("User joined room" + room);
  })

  socket.on("new message",(newMessageReceived)=>{
    let chat = newMessageReceived.chat
    if(!chat.users) return console.log("chat.users is not defined");

    chat.users.forEach((user) =>{
      if(user._id === newMessageReceived.sender._id) return

      socket.in(user._id).emit("message received", newMessageReceived)
    })
  })
})

