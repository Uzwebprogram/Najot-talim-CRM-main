const { verify } = require("jsonwebtoken");
// const { signUser } = require('../lib/Jwt')

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
    if (role == "teacher") {
      const allUsers = read("users.json")
      const allGroups = read("group.json")
      const allStudents =  allUsers.filter(e => e.role == "student")

      const foundGroup = allGroups.filter(allTeachers => allTeachers.TeacherName == userFilter);
      let teacherStudents = []
      for(i=0;i<foundGroup.length; i++){
        for(j=0;j<allStudents.length; j++){
            if(foundGroup[i].GroupName == allStudents[j].GroupName){
                teacherStudents.push(allStudents[j])
            }
        }
    }
    console.log( teacherStudents);
          
      res.render('teacher', {
        userFilter,
        groups: foundGroup, teacherStudents
      })
    } else if (role == "admin") {
      res.redirect("/admin");
    } else if (role == "student") {
      res.redirect("/student");
    }
  }
};

module.exports = {
  GET,
};
