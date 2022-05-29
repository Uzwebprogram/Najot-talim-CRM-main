const { verify } = require("jsonwebtoken");
const { read, write } = require("../lib/FS");

const GET = (req, res) => {
  const { token } = req.cookies;
  const user =  verify(token, 'SECRET-KEY')
  const userFilter = user.name

  if (!token) {
    return res.redirect("/");
  } else {
    const verifiedUser = verify(token, "SECRET-KEY");
    const role = verifiedUser.role;
    if (role == "student") {
      const allStudent = read("users.json").filter(e => e.role === "student")
      console.log(allStudent);
      const foundStudent = allStudent.find(e => e.name == userFilter);
      const foundGroup = foundStudent.GroupName
      const foundGroups = read("group.json").filter(e => e.GroupName == foundGroup)
      console.log(foundGroup, foundGroup);
      res.render('student', {
        userFilter,
         foundGroups,
      })
    } else if (role == "admin") {
      res.redirect("/admin");
    } else if (role == "teacher") {
      res.redirect("/teacher");
    }
  }
};
module.exports = {
  GET,
};
