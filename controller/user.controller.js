const User = require('../models/user.model')
const bcrypt = require('bcrypt')

module.exports.userRegister = async (req, res) => {
    const { name, email, password } = req.body
    try {
        const protectedPassword = await bcrypt.hash(password, 8)
        const user = new User({ name, email, password: protectedPassword })
        await user.save()
        res.status(200).json({ message: "Registration Successfull" })
    }
    catch (error) {
        res.status(501).json({ error: "Error in registration" })
    }
}

module.exports.userlogin = async (req, res) => {
    const { email, password } = req.body
    const uniqueEmail = await User.findOne({ email })
    try {
        const matchPassword = await bcrypt.compare(password, uniqueEmail.password)
        if (!uniqueEmail) {
            res.status(404).json({ message: "No user is registered with this Email" })
        }
        else if (!matchPassword) {
            res.status(404).json({ message: "Password is incorrect" })
        }
        else {
            res.status(200).json({ message: "User Login Successfully" })
        }
    }
    catch (error) {
        res.status(501).json({ error: "Some error occured" })
    }
}
