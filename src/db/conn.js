const mongoose = require('mongoose');

const URL = "mongodb+srv://ashuramajestic:batki143@portfoliopag.4sls57q.mongodb.net/?retryWrites=true&w=majority";
mongoose.set('strictQuery', false);

//  Creating a database
mongoose.connect(URL, {
    useUnifiedTopology: true
}).then(() => {
    console.log("Connection Created");
}).catch((err) => {
    console.log("Error: " + err);
});
