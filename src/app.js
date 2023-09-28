const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 2803;
const path = require("path");
require('./db/conn');
const User = require('./model/contact');
const hbs = require("hbs");

// Defining Path
const staticPath = path.join(__dirname, "../public");
const bootstrapPath = path.join(
    __dirname,
    "../node_modules/bootstrap/dist/css"
);
const jsPath = path.join(__dirname, "../node_modules/bootstrap/dist/js");
const jqueryPath = path.join(__dirname, "../node_modules/jquery/dist");
const templatePath = path.join(__dirname, "../Templates/views");
const partialsPath = path.join(__dirname, "../Templates/partials");

// Middleware

app.use(express.urlencoded({ extended: false }));
app.use("/jq", express.static(jqueryPath));
app.use("/style", express.static(bootstrapPath));
app.use("/js", express.static(jsPath));
app.use(express.static(staticPath));
app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialsPath);

//Routing
app.get("/", (req, res) => {
    res.render("index");
})

app.post("/message", async (req, res) => {
    try {
        const registerUser = new User(req.body);
        await registerUser.save();
        res.status(201).render("index");
    }
    catch (err) {
        res.status(400).send("error:" + err);
    }

})

app.listen(port, () => {
    console.log(`Listen On ${port}`);
});
