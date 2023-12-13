const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const { Schema } = mongoose;

const userSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique:true },
        password: { type: String, required: true },

        img: { type: String, required: true, default: 'https://www.example.com/default-image.jpg' }
    },
    {
        timestamps: true
    }
);

userSchema.methods.matchPassword = async function(enterPassword){
    return await bcrypt.compare(enterPassword, this.password)
}

userSchema.pre('save',async function (next){
    if(!this.isModified){
        next()
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

module.exports = mongoose.model("User", userSchema);



