const mongoose = require('mongoose');

const emp = mongoose.Schema({
    name: String,
    sal: Number,
    image: String
})
module.exports = mongoose.model('Emp', emp);