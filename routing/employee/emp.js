const express = require('express');
const router = express.Router();
const Emp = require('../../model/empModel')
router.get('/',(req,res) =>{
    // res.json({
    //     id : "3",
    //     name : "Tareq",
    //     sal : "1000",
    //     image : "image"
    // })
    Emp.find()
    .exec()
    .then(result => {
        res.json({
            result : result
        })
    })
    .catch()
})
router.get('/:id',(req,res) =>{
    const id = req.params.id;
    res.json({
        empId : id
    })
})
router.post('/',(req,res) => {
    // const emp = {
    //     id : req.body.id,
    //     name : req.body.name,
    //     sal : req.body.sal,
    //     image : req.body.image 
    // }
    // res.json({
    //     emp : emp
    // })
    new Emp({
        name : req.body.name,
        sal : req.body.sal,
        image : req.body.image 
    })
    .save()
    .then(result =>{
        res.json({
            message : "Done",
            id :result._id,
            name : result.name,
            sal : result.sal
        })
    })
    .catch(err => {
        res.json({
            message : err.message
        })
    })
})
module.exports = router