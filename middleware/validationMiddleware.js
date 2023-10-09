module.exports = (req,res,next)=>{//Custom Middleware example..
    if(req.files === null || req.body.title === null){
        return res.redirect('/posts/new')
    }
    next()
};