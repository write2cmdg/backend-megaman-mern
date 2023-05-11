

const User = require('../models/userModel')
const mongoose = require('mongoose')


//Login user
const loginUser = async (req, res) => {
    res.json({mssg: 'login user'})

}

//Register user
const registerUser = async (req, res) => {
    res.json({mssg: 'register user'})


}


module.exports = {
    loginUser,
    registerUser
}