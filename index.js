const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_DB_URL,{
    useNewUrlParser: true
});


const ejs = require('ejs');
const fileUpload = require('express-fileupload');
const expressSession = require('express-session');
const flash = require('connect-flash');


const newPostController = require('./controllers/newPost');
const homeController = require('./controllers/home');
const getPostController = require('./controllers/getPost');
const storePostController = require('./controllers/storePost');
const newUserController = require('./controllers/newUser');
const storeUserController = require('./controllers/storeUser');
const loginController = require('./controllers/login')
const loginUserController = require('./controllers/loginUser')
const logoutController = require('./controllers/logout')

require('dotenv').config();

app.set('view engine', 'ejs');

app.use(fileUpload())
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded())
app.use(expressSession({
    secret: 'keyboard cat'
    }));
    
    global.loggedIn = null;
    app.use("*", (req, res, next) => {
        loggedIn = req.session.userId;
        next()
        });
        
app.use(flash());



const validateMiddleWare = require('./middleware/validationMiddleware');
const authMiddleware = require('./middleware/authMiddleware');
const redirectIfAuthenticatedMiddleware = require('./middleware/redirectIfAuthenticatedMiddleware');

app.use('/posts/store',validateMiddleWare);

app.get('/',homeController);

app.get('/about',(req,res)=> {
    // res.sendFile(path.resolve(__dirname, 'pages/about.html'));
    res.render('about');
})

app.get('/contact',(req,res)=> {
    // res.sendFile(path.resolve(__dirname, 'pages/contact.html'));
    res.render('contact');
})

// app.get('/post',(req,res)=> {
//     // res.sendFile(path.resolve(__dirname, 'pages/post.html'));
//     res.render('post');
// })

app.get('/post/:id',getPostController);
    

    app.get('/posts/new', authMiddleware, newPostController)

app.get('/auth/register', redirectIfAuthenticatedMiddleware, newUserController);
app.get('/auth/login', redirectIfAuthenticatedMiddleware, loginController);
app.get('/auth/logout', logoutController);


app.post('/posts/store', storePostController);
app.post('/users/register', redirectIfAuthenticatedMiddleware,storeUserController );
app.post('/users/login', redirectIfAuthenticatedMiddleware,loginUserController);

app.use((req, res) => res.render('notfound'));

let port = process.env.PORT;
if (port == null || port == "") {
port = 4000;
}

app.listen(port, ()=>{
    console.log('App listening');
});

