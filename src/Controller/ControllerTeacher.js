const { verify } = require("jsonwebtoken");

const { read, write } = require("../lib/FS");

const GET = (req, res) => {
  const { token } = req.cookies;

  if (!token) {
    return res.redirect("/");
  } else {
    const verifiedUser = verify(token, "SECRET-KEY");
    const role = verifiedUser.role;
    if (role == "admin") {
      const TeacherFilter = read("users.json").filter((e) => e.role == "teacher");
      const CourserFilter = read("course.json");
      res.render("CreateTeacher.ejs", { TeacherFilter, CourserFilter });
    } else {
      res.sendStatus(401);
    }
  }
};

const GETiD = (req, res) => {
  const { id } = req.params;
  const KursFilter = read("course.json").find((e) => e.id == id);
  const TeacherFilter = read("users.json").filter((e) => e.cursname == id);

  const fullMarket = {
    id: KursFilter.id,
    course: KursFilter.course,
    imageLogo: KursFilter.imageLogo,
    des: KursFilter.des,
    price: KursFilter.price,
    TeacherFilter: TeacherFilter,
  };
  res.render("CreateTeacher.ejs", fullMarket);
};
const POST = (req, res) => {
  const { name, age, surname, cursname, role, password, tel } = req.body;
  const { filename } = req.file;

  console.log(cursname);

  const TeacherFilter = read("users.json");
  TeacherFilter.push({
    id: TeacherFilter[TeacherFilter.length - 1].id + 1,
    name,
    age,
    surname,
    role: "teacher",
    cursname,
    password,
    AvatarUser: `https://crm-najot.herokuapp.com/uploads/` + filename,
    tel,
  });
  write("users.json", TeacherFilter);
  res.redirect('/teacher')
};
module.exports = {
  GET,
  POST,
  GETiD,
};
