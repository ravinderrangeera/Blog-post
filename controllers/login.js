module.exports = (req, res) =>{
    let username = ''
    let password = ''
        const data2 = req.flash('data2')[0];
        if(typeof data2 != "undefined"){
            username = data2.username;
            password = data2.password
}

    res.render('login', {
        // errors: req.session.validationErrors
        errors: req.flash('validationErrors2'),
        username: username,
        password: password
        
        })
    }