const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
// const DB = "mongodb://127.0.0.1/Portfolio"
const DB = process.env.MONGO_URI;
//  Creating a database
mongoose.connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => {
    console.log("Connection Created");
}).catch((err) => {
    console.log("Error: " + err);
});
