const User = require('../models/model');
const jwt = require('jsonwebtoken');

const createToken = (id) => {
    return jwt.sign({ id }, process.env.SECRET, {expiresIn: '1d'});
}

//Login User
const login = async (req, res) => {
    const {contact, password} = req.body
  
    try {
      const user = await User.login(contact, password)
  
      const token = createToken(user._id)
  
      res.status(200).json({user, token})
    } catch(error){
      res.status(400).json({error: error.message})
    }
}

//Signup User
const signup = async (req, res) => {
    const {userName,
        email,
        contact,
        password} = req.body
  
    try {
      const user = await User.signup(userName, email, contact, password)
  
      //Create Token
      const token = createToken(user._id)
  
      res.status(200).json({contact, token})
    } catch (error) {
      res.status(400).json({error: error.message})
    }
}

module.exports = {
    signup,
    login
}