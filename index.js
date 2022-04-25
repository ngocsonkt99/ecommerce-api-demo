const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.APP_PORT;
const app = express();
var fs = require("fs");
const fileUpload = require('express-fileupload');
require('dotenv').config()

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
// enable file upload
app.use(fileUpload({
    createParentPath: true
}));

//read assets image
app.use(express.static(__dirname));
app.use("/assets/uploads", express.static(__dirname + '/assets/uploads'));
app.use(cors()); 

app.get("/", (req, res) => {
    res.json({
        info: "node js started",
    });
});

//route endpoint
const routes = require("./routes/routes");
routes(app);

//listen port
// app.listen(port, () => {
//     console.log('nodejs api is running on port ${port}.')

app.listen(process.env.APP_PORT, () => {
    console.log(`App running on port ${process.env.APP_PORT}.`)
});
