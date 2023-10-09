const BlogPost = require('../models/BlogPost');

module.exports = async (req,res)=> {
    // res.sendFile(path.resolve(__dirname, 'pages/index.html'));
    const blogposts = await BlogPost.find({}).populate('userid');
    console.log(req.session)
    res.render('index',{
        blogposts
    });
    console.log(blogposts);
};