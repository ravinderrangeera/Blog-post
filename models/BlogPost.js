const mongoose = require('mongoose');
const Schema = mongoose.Schema ;
let uniqueValidator = require('mongoose-unique-validator');

const BlogPostSchema = new Schema({
    title:{ type: String,
required: true,
unique: true}, 
    body: {type: String, required: true},
    // username: String,
    userid: {
        type: mongoose.Schema.Types.ObjectId, //Each post stores a reference to the user (userid) who created that post. With userid, we will then populate the post with the user data.
        ref: 'User',
        required: true
        },
datePosted:{ /* can declare property type with an object like this because
we need 'default' */
type: Date,
default: new Date()
},
image: String

});

BlogPostSchema.plugin(uniqueValidator);

const BlogPost = mongoose.model('BlogPost', BlogPostSchema);


module.exports = BlogPost;
