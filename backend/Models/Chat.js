const mongoose = require('mongoose')

const chatSchema = mongoose.Schema(
    {
        messageName:{type:String, trim:true},
        isGroupChat:{type:Boolean, default:false},
        users:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
        }],
        newMessage:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Messages",
        },
        groupAdmin:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",

        }
    },

    {
        timestamps:true,
    }
);

module.exports = mongoose.model("Chats",chatSchema)