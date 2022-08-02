const mongoose = require('mongoose')

const schema = mongoose.Schema({
    username:{
        type:String,
        required: true,
        default:null
    },
    password:{
        type:String,
        required: true,
        default:null
    },
    email:{
        type: String,
        required:true,
        unique: true
    },
    token:{
        type:String,
    },
    createdAt:{
        type: Number,
        default:  233//Date.getTime()/1000
    }
});



const Users =  mongoose.model('users',schema);

module.exports = Users;