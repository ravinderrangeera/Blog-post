const mongoose = require('mongoose');
const BlogPost = require('./models/BlogPost');

// mongoose.connect('mongodb://localhost/new_database',{
//     useNewUrlParser: true
// });

mongoose.connect('mongodb+srv://ravirangera0:blogProject123@cluster0.oigkiff.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser: true
});

const newDocument = {
    title: 'The Mythbuster Guide to Saving Money on Energy Bills',
    body: 'If you have been here a long time, you might remember when I went on ITV Tonight to dispense a masterclass in saving money on energy bills. Energy saving is one of my favourite money topics, because once you get past the boring bullet-point lists, a whole new world of thrifty nerdery opens up. You know those bullet-point lists. You start spotting them everything at this time of year. They go like this:'
    };
    // BlogPost.create(newDocument)
    // .then((createdDocument) => {
    //   console.log('Document created:', createdDocument);
    // })
    // .catch((error) => {
    //   console.error(error);
    // });

const id = '651d39f9216d460a211028b0';

        BlogPost.findById(id).then(result=> console.log(result)).catch((error)=> {
            console.log(error);
        });
