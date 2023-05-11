

const User = require('../models/userModel')
const mongoose = require('mongoose')


//Login user
const loginUser = async (req, res) => {
    
    const users = await User.find({}).sort({ createdAt: -1 })
    res.status(200).json(users)
}

//Register user
const registerUser = async (req, res) => {

    const { id } = req.params 

    if (!mongoose.Types.ObjectId.isValid(id)) {

        return res.status(404).json({ error: 'user not found'})
    }

    const user = await User.findById(id)

    if (!user) {

        return res.status(404).json({ error: `user: ${id}, not found` })
    }

    res.status(200).json(user)

}


module.exports = {
    loginUser,
    registerUser
}