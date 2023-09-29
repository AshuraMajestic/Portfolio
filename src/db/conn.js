const mongoose = require('mongoose');
const dbKey = process.env.MONGO_URI;
const URL = dbKey;
mongoose.set('strictQuery', false);

//  Creating a database
mongoose.connect(URL, {
    useUnifiedTopology: true
}).then(() => {
    console.log("Connection Created");
}).catch((err) => {
    console.log("Error: " + err);
});
