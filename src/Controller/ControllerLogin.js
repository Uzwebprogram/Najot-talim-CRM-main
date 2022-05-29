const LOGIN = (req , res)=>{
    const { role } = req.body

    role == 'admin' ? res.redirect('/admin') :
    role == 'teacher' ? res.redirect('/pageteacher') :
    role == 'student' ? res.redirect('/pagestudent') :
    res.redirect('/')
}
const GET = (req , res) =>{
    res.render('login')
    
}
module.exports = {
    GET,
    LOGIN
}