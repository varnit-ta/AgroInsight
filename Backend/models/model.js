const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        minlength: 3
    },
    email: {
        type: String,
        unique: true,
    },
    contact: {
        type: Number,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    }
})

//Static signup method
userSchema.statics.signup = async function (userName, email, contact, password) {
    if (!userName || !email || !contact || !password) {
        throw new Error('All fields are required')
    }
    if (!validator.isEmail(email)) {
        throw new Error('Email is invalid')
    }
    if (!validator.isStrongPassword(password)) {
        throw new Error('Password is not strong')
    }

    const existsEmail = await this.findOne({ email })
    const existsContact = await this.findOne({ contact });
    if (existsEmail || existsContact ) {
        throw new Error('User already exists')
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const newUser = await this.create({
        userName,
        email,
        contact,
        password: hashedPassword
    })

    return newUser
}

//Static login method
userSchema.statics.login = async function (contact, password) {
    if (!contact || !password) {
        throw new Error('All fields are required')
    }

    const user = await this.findOne({ contact })
    if (!user) {
        throw new Error('Invalid contact')
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
        throw new Error('Invalid credentials')
    }

    return user
}

module.exports = mongoose.model("User", userSchema);