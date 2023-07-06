module.exports.loginMiddleware = (req, res, next) => {
    const { email, password } = req.body
    if (email && password) {
        next()
    }
    else {
        res.status(400).json({ message: "Please fill all fields" })
    }
}