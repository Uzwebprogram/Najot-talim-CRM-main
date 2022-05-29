const { verify } = require("jsonwebtoken")
const {read ,write}= require("../lib/FS")

const GET = (req, res) => {
    const { token } = req.cookies;

    if (!token) {
        return res.redirect("/")
    } else {
        const verifiedUser = verify(token, "SECRET-KEY");
        const role = verifiedUser.role;

        if (role == "admin") {
            const TeacherUser= read("users.json").filter(e => e.role == "teacher")
            const StudentUser= read("users.json").filter(e => e.role == "student")
            const AdminUser= read("users.json").filter(e => e.role == "admin");
            const GroupNames = read("group.json")
            const course = read("course.json")
            res.render("admin", {TeacherUser ,StudentUser ,AdminUser ,GroupNames ,course})
        } else if (role == "teacher") {
            res.redirect('/pageteacher')
        } else if (role == 'student') {
            res.redirect('/pagestudent')
        }
    }
}

module.exports = {
    GET
}