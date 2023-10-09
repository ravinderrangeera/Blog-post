const BlogPost = require('../models/BlogPost');
const path = require('path')

module.exports = (req,res)=> { // To avoid the callback hell so that we can not have trouble in understanding the code we use async function.
    let image = req.files.image;
    image.mv(path.resolve(__dirname,'../public/img',image.name),async (error)=>{
    await BlogPost.create({...req.body, image: '/img/' + image.name,userid: req.session.userId
})
    res.redirect('/')
    })



    // console.log(req.body);
    // BlogPost.create(req.body)
    // .then((createdDocument) => {
    //   console.log('Document created:', createdDocument);
    // })
    // .catch((error) => {
    //   console.error(error);
    // });
    // res.redirect('/');


}