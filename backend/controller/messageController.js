// const asyncHandler = require('express-async-handler');
// const Messages = require('../Models/Message');
// const User = require('../Models/User');
// const Chat = require('../Models/Chat');

// const mongoose = require('mongoose')

// const sendMessage = asyncHandler(async(req,res) =>{
//     const messageId = mongoose.Types.ObjectId();
//     const { content, chatId } = req.body
//     if( !content || !chatId){
//         console.log("Invalid data is passed");
//         return res.status(400).send({
//             msg:"Invalid data passed into request"
//         })
//     }

//     const freshMessage ={
//         sender : req.user._id,
//         content : content,
//         chat :chatId
//     }
//     try {
//         let message = await Messages.create(freshMessage)
//         message = await message.populate('sender','name img')
//         message = await message.populate('chat')
//         message = await User.populate('message', {
//             path: "chat.users",
//             select: "name img email",
//         })
//         await Chat.findByIdAndUpdate(req.body.chatId, {
//             newMessage: messageId,
//         })
//         res.json(message)
//     } catch (error) {
//         res.status(400)
//         throw new Error(error.message)
//         console.log(error.message);
//     }
// })
// module.exports = {sendMessage}


const asyncHandler = require('express-async-handler');
const Message = require('../Models/Message');
const User = require('../Models/User');
const Chat = require('../Models/Chat');

const mongoose = require('mongoose');

const sendMessage = asyncHandler(async (req, res, next) => {
  const messageId = new mongoose.Types.ObjectId();
  const { content, chatId } = req.body;

  if (!content || !chatId) {
    console.log("Invalid data is passed");
    return res.status(400).send({
      msg: "Invalid data passed into request",
    });
  }

  const freshMessage = {
    sender: req.user._id,
    content: content,
    chat: chatId,
  };

  try {
    let message = await Message.create(freshMessage);
    message = await message.populate('sender', 'name img')
    message = await message.populate('chat')
    await User.populate(message, {
      path: "chat.users",
      select: "name img email",
    });

    await Chat.findByIdAndUpdate(req.body.chatId, {
      $push: { newMessage: messageId },
    });

    res.json(message);
  } catch (error) {
    console.error(error.message);
    res.status(400);
    next(error);
  }
});

const allMessage =asyncHandler(async(req,res,next) =>{
    try {
        const messages = await Message.find({chat: req.params.chatId})
    .populate('sender', 'name email img')
    .populate('chat')
    res.json(messages)
    } catch (error) {
        console.error(error.messages)
        next(error)
    }
    
})

module.exports = { sendMessage , allMessage};
