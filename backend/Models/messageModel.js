const mongoose = require('mongoose')

const messageSchema = mongoose.Schema(
    {
        sender:{type:mongoose.Schema.Types.ObjectId, ref:"User"},
        content:{type:String, trim:true},
        chat:{type:mongoose.Schema.Types.ObjectId, ref:"Chats"},   
    },

    {
        timestamps: true,
    }
)

const Messages = mongoose.model("Messages",messageSchema)
module.exports = Messages