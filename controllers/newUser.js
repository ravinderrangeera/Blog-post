module.exports = (req, res) =>{
    let username = ""
let password = ""
const data = req.flash('data')[0];//If we try logging req.flash(‘data’) to the console, we realize that req.flash(‘data’) returns us an array with the data in the first element. Thus we access it using req.flash('data')[0].
if(typeof data != "undefined"){
username = data.username
password = data.password
}
    res.render('register',{
        // errors: req.session.validationErrors
        errors: req.flash('validationErrors'),
        username: username,
        password: password
        
        }) // render register.ejs
    }
    