const asyncHandler = require("express-async-handler");
const generateToken = require("../config/generateToken");
const User = require('../Models/User');


const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, img } = req.body;
    if (!name || !email || !password) {
        res.status(400);
        throw new Error("Please enter all fields properly");
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400).send("User already exists");
    }

    const user = await User.create({
        name,
        email,
        password,
        img,
    });

    if (user) {
        res.status(200).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            img: user.img,
            token: generateToken(user._id),
        });
    } else {
        res.status(400).send({
            msg: "Failed to create the user",
        });
    }
});

const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            img: user.img,
            token: generateToken(user._id),
        });
    } else {
        res.status(400).send({
            msg: "Invalid email or password",
        });
    }
});


const findUsers = asyncHandler(async(req,res)=>{
    const keyword = req.query.search ?{
        $or:[
            {name: { $regex: req.query.search, $options: "i"}},
            {email: { $regex: req.query.search, $options: "i"}},
        ]
    }: {};
    const users = await User.find(keyword).find({_id:{$ne:req.user._id}})
    res.send(users)
    
})

module.exports = { registerUser, authUser ,findUsers};

