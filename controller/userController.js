

const User = require('../models/userModel')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d'})
}


//Login user
const loginUser = async (req, res) => {
    res.json({mssg: 'login user'})

}

//Register user
const registerUser = async (req, res) => {

    const { email, password } = req.body

    try {
        const user = await User.register(email, password)

        //create token
        const token = createToken(user._id)

        res.status(200).json({ email, token })

    } catch (error) {
        res.status(400).json({error: error.message})
    }

}


module.exports = {
    loginUser,
    registerUser
}