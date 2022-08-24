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
    admin:{
        type:Boolean,
        default: false
    },
    createdAt:{
        type: Number,
        default: (new Date()).getTime()
    }
});



const Users =  mongoose.model('users',schema);

module.exports = Users;