const { verify } = require("jsonwebtoken")
const {read , write} = require("../lib/FS")
const GET = (req, res) => {

    const { token } = req.cookies;

    const verifiedUser = verify(token, "SECRET-KEY")


    if (!verifiedUser) {
        return res.redirect("/")
    }
    const role = verifiedUser.role
    if (role == "admin") {
        const StudentFilter = read("users.json").filter((e) => e.role == "student");
        const CourserFilter = read("course.json")
        res.render('CreateReader.ejs' , {StudentFilter ,CourserFilter})
    } else {
        res.sendStatus(401)
    }
}
const POST = (req, res) => {
    const { name, age, surname, cursname ,password , telefon , AvatarUser , GroupName, role} = req.body;
    const { filename } = req.file;
  
    const StudentFilter = read("users.json");
  
    StudentFilter.push({
      id: StudentFilter.length + 1,
      name,
      age,
      surname,
      cursname,
      password,
      telefon,
      GroupName,
      role  : "student" ,
      AvatarUser: `https://crm-najot.herokuapp.com/uploads/` + filename,
    });
  
    write("users.json", StudentFilter);
  
    res.redirect("/createReader");
  };
module.exports = {
    GET,
    POST
}