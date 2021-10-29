const express = require('express');
const db = require('../shared/connectionDB');
const router = express.Router();

const multer = require('multer')
const storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, 'uploads')
    },
    filename: (req, file, callBack) => {
        callBack(null, `FunOfHeuristic_${file.originalname}`)
    }
})

const upload = multer({ storage: storage })
const User = require('../users/user.model')
router.get('/', (req, res) => {
    User.find({ _id: '5ea1e7e20ace79288c342925' })
        .exec()
        .then(result => {
            res.json({
                result: result
            })
        })
        .catch()
});
router.post('/login', function (req, res, next) {
    const email = req.body.email;
    const password = req.body.password;
    db.query("SELECT * FROM users where email = '"+email+"' and password = '"+password+"'", function (err, result, fields) {
        if (err) throw err;
            if (result.length > 0) {
                res.json({
                    message: "Login Done",
                    data: {
                        id: result[0].userId,
                        firstName: result[0].firstName,
                        midName: result[0].midName,
                        lastName: result[0].lastName,
                        email: result[0].email,
                        gender: result[0].gender,
                        phoneNumber: result[0].phoneNumber,
                        country: result[0].country,
                        city: result[0].city,
                        address: result[0].address,
                        profileImage: result[0].profileImage,
                        backgroundImage: result[0].backgroundImage
                    }
                })
            } else {
                res.json({
                    message: "Login fail",
                    result: result
                })
            }

        })
})
module.exports = router