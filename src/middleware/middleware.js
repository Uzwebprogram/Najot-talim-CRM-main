const { read } = require("../lib/FS")
const { sign } = require("jsonwebtoken")

module.exports = (req, res, next) => {
    const { name, password } = req.body

    const foundUser = read("users.json").find(e => e.name == name && e.password == password)

    if (!foundUser) {
        return res.status(401).send("Uka pishding")
    }
    const { id, role } = foundUser

    res.cookie("token", sign({ id, role , name }, "SECRET-KEY"))
    req.body.role = foundUser.role
    
    next()
}