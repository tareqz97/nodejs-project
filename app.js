const express = require('express');
const app = express();
const cors = require('cors')
var path = require("path");
// app.use(function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', "http://localhost:4200");
//     res.header('Access-Control-Allow-Credentials', true);
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader("Access-Control-Allow-Credentials", "true");
//     res.setHeader("Access-Control-Max-Age", "1800");
//     res.setHeader("Access-Control-Allow-Headers", "content-type");
//     res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS");
//     next()
// });

var bodyParser = require('body-parser');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

const auth = require('./API/auth/auth')
app.use('/auth', auth)

const post = require('./API/posts/post')
app.use('/addPost', post)

const signUp = require('./API/users/signUp')
app.use('/signUp', signUp)

app.get('/uploads/:filename', (req, res) => {
    res.sendFile(path.join(__dirname, "./uploads/" + req.params.filename));
});



app.listen(3000, function () {
    console.log("Express server listening on port 3000");
});
module.exports = app;

