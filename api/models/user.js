const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    name : {type : String, required : true},
    address : {type : String, required : true},
    productImage : {type : String, required : true}
});

module.exports = mongoose.model('User', userSchema);