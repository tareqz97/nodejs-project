const express = require('express');
const router = express.Router();
const Post = require('./post.model')
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, 'uploads')
    },
    filename: (req, file, callBack) => {
        callBack(null, `PostImage_${file.originalname}`)
    }
})


const upload = multer({ storage: storage })
router.post('/', upload.array('files'), function (req, res, next) {
    var fielsName = [];
    req.files.forEach(element => {
        fielsName.push(element.filename)
    });
    console.log(fielsName)
    new Post({
        userId: req.body.userId,
        text: req.body.text,
        image: fielsName
    })
        .save()
        .then(data => {
            res.json({
                message: "Done!",
                data: data
            })
        })
        .catch(err => {
            res.json({
                message: err.message
            })
        })

})
module.exports = router