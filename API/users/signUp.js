const express = require('express');
const router = express.Router();
const User = require('./user.model')

router.post('/', function (req, res, next) {
    console.log(req.body);
    new User({
        firstName: req.body.firstName,
        midName: req.body.midName,
        lastName: req.body.lastName,
        email: req.body.email,
        gender: req.body.gender,
        phoneNumber: req.body.phoneNumber,
        country: req.body.country,
        city: req.body.city,
        address: req.body.address,
        profileImage: req.body.profileImage,
        backgroundImage: req.body.backgroundImage,
        passworrd: req.body.passworrd
    })
    .save()
    .then(data =>{
        res.json({
            message : "Done!",
            data : data
        })
    })
    .catch(err => {
        res.json({
            message : err.message
        })
    })

})
module.exports = router