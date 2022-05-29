const { verify } = require("jsonwebtoken");
const { read, write } = require("../lib/FS");


const GET = (req, res) => {
  const { token } = req.cookies;


  if (!token) {
    return res.redirect("/");
  } else{
    const verifiedUser = verify(token, "SECRET-KEY");
    const role = verifiedUser.role;
    if (role == "admin") {
        const GruopFilter = read("group.json")
        const CourserFilter = read("course.json")
        const UserFilter = read("users.json")
      res.render("CreateGroups.ejs" , {GruopFilter , CourserFilter , UserFilter});
    } else {
      res.sendStatus(401);
    }
  }

  
};
const POST = (req, res) => {
  const { GroupName, gruopDate, KursName, TeacherName , Bootcamp , standart } = req.body;
  const { filename } = req.file;

  const GruopFilter = read("group.json");

  GruopFilter.push({
    id: GruopFilter.length + 1,
    GroupName,
    KursName,
    Bootcamp,
    standart,
    TeacherName,
    gruopDate,
    AvatarUser: `https://crm-najot.herokuapp.com/uploads/` + filename,
  });

  write("group.json", GruopFilter);

  res.redirect("/Gruop");
};
module.exports = {
  GET,
  POST,
};
