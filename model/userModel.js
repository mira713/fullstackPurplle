const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name : {type: String, require: true},
    email : {type: String, require: true},
    pass : {type : String, require : true},
    num : {type : Number, require : true}
},{
    versionKey : false
})

const UserModel = mongoose.model('user',UserSchema);

module.exports = {
    UserModel
}