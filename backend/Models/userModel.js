const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        name:{type:String, required:true},
        email:{type:String, required:true},
        password:{type:String, required:true},
        img:{type:String,required:true,default:'https://www.google.com/imgres?imgurl=https%3A%2F%2Ficon-library.com%2Fimages%2Fno-picture-available-icon%2Fno-picture-available-icon-13.jpg&tbnid=hZJKYL3PBnF1TM&vet=12ahUKEwiM5oei7qSCAxUPzaACHVnrCe4QMyglegUIARCnAQ..i&imgrefurl=https%3A%2F%2Ficon-library.com%2Ficon%2Fno-picture-available-icon-13.html&docid=iJNm9xzU5t0VbM&w=180&h=250&q=images%20that%20can%20be%20put%20when%20no%20image%20available%20of%20a%20person&ved=2ahUKEwiM5oei7qSCAxUPzaACHVnrCe4QMyglegUIARCnAQ'}
    },
    {
        timestamps:true
    }
)

const User = mongoose.model("User" , userSchema)

module.exports = User