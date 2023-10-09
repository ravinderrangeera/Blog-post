const User = require('../models/User.js')
const path = require('path')
module.exports = async (req,res)=>{
try{
   await User.create(req.body)
     res.redirect('/')
    
        
}catch(err){
    console.log(err);
    if(err){
      const validationErrors = Object.keys(err.errors).map(key =>err.errors[key].message);
      req.flash('validationErrors',validationErrors)
      req.flash('data',req.body)
      //req.session.validationErrors = validationErrors; 

        return res.redirect('/auth/register')
        };
}}