const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

//  Creating a database
mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true
}).then(() => {
    console.log("Connection Created");
}).catch((err) => {
    console.log("Error: " + err);
});
