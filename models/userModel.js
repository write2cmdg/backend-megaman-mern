
const mongoose = require("mongoose");
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const userSchema = new Schema({

    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        unique: false,
        required: true
    }
},{ timestamps: true }
)

//static register method
userSchema.statics.register = async (email, password) => {

    const exists = await this.findOne({ email })

    if (exists) {
        throw Error('Email already in use')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({ email, password: hash })

    return user

}


const userModel = mongoose.model("User", userSchema);

module.exports = userModel;