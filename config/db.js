const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI_ATLAS, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB Atlas');
}).catch((err) => {
    return (err);
})