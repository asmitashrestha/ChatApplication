const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        // img: { type: String, required: true, default: 'https://www.example.com/default-image.jpg' }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("User", userSchema);
