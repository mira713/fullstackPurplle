const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name : {type: String},
    email : {type: String},
    password : {type : String||Number},
    number : {type : Number}
},{
    versionKey : false
})

const UserModel = mongoose.model('user',UserSchema);

module.exports = {
    UserModel
}