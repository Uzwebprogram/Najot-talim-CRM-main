const express = require("express");
const app = express();
const port = process.env.PORT || 9000;
const path = require("path");
const upload = require('./lib/multer')
const {read , write} = require("./lib/FS") 
app.use(express.json())


const cookieParser = require('cookie-parser')
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
const auth = require("./middleware/middleware");

app.use(cookieParser());



app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views/"));

const ControllerLogin = require("./Controller/ControllerLogin");
const ControllerAdmin = require("./Controller/ControllerAdmin");
const ControllerReader = require("./Controller/ControllerReader");
const ControllerTeacher = require("./Controller/ControllerTeacher");
const ControllerGruop = require("./Controller/ControllerGruop");
const ControllerCrouser = require("./Controller/ControllerCrouser");
const ControllerStudentPage = require("./Controller/ControllerStudentPage");
const ControllerTeacherPage = require("./Controller/ControllerTeacherPage");
const LoginController = require("./Controller/ControllerLogin");
const TeacherPageUserController = require("./Controller/TeacherPageUserController");

app.get("/", ControllerLogin.GET);
app.get("/admin",  ControllerAdmin.GET);
app.get("/teacher", ControllerTeacher.GET);
app.get("/teacher/:id", ControllerTeacher.GETiD);
app.post("/teacher",  upload.single('file'), ControllerTeacher.POST);
app.get("/createreader", ControllerReader.GET);
app.get("/Gruop", ControllerGruop.GET);
app.post("/Gruop",upload.single('file'), ControllerGruop.POST);
app.get("/Crouser", ControllerCrouser.GET);
app.get("/pageteacher",  ControllerTeacherPage.GET);
app.get("/pagestudent",  ControllerStudentPage.GET);
app.get("/TeacherPageUser",  TeacherPageUserController.GET);
app.post("/login", auth, LoginController.LOGIN);
app.post("/Crouser", upload.single('file'), ControllerCrouser.POST)
app.post("/createreader", upload.single('file'), ControllerReader.POST);
app.listen(port, console.log(port));

app.get('/api', (_, res) => {
    const allGroups = read("group.json");
    res.send(allGroups);
});
  
app.get('/api/v2', (_, res) => {
   const allTeachers = read("users.json");
   res.send(allTeachers);
});