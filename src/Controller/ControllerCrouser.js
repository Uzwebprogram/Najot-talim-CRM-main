const {read ,write} = require("../lib/FS")

const { verify } = require("jsonwebtoken")


const GET = (req, res) => {

    const { token } = req.cookies;

    const verifiedUser = verify(token, "SECRET-KEY")

    if (!verifiedUser) {
        return res.redirect("/")
    }
    const role = verifiedUser.role
    if (role == "admin") {
        const courser = read("course.json")
        res.render("CreateCrouser", {courser})
    } else {
        res.sendStatus(401)
    }
}
const POST = (req ,res) =>{
    const { course, standart , Bootcamp, price , des} = req.body
    const { filename } = req.file
    
    const courser = read("course.json")
    courser.push({ id: courser.length + 1, course ,Bootcamp , standart ,des  , price , imageLogo : `https://crm-najot.herokuapp.com/uploads/` + filename });
    write('course.json', courser)
    res.redirect("/Crouser")
    console.log(req.file);
    res.send("ok")
}

module.exports = {
    GET,
    POST
}