const bcrypt = require('bcrypt')
const User = require('../models/User')
module.exports = async (req, res) =>
{try{
const { username, password } = req.body;
const user = await User.findOne({username:username});
    if (user){
bcrypt.compare(password, user.password, (error, same) =>{
if(same){ // if passwords match
// store user session, will talk about it later
req.session.userId = user._id;
res.redirect('/')
}
else{
res.redirect('/auth/login')
}
})
}
else{
res.redirect('/auth/login')
}
}
catch(err){     
    if(err){
    const validationErrors2 = Object.keys(err.errors).map(key =>err.errors[key].message);
    req.flash('validationErrors2',validationErrors2)
    req.flash('data2',req.body)  }
}
} ;