const mongoose=require('mongoose');

const googleUserSchema=mongoose.Schema({
    googleID:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        required:true,
        default:"customer"
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

const googleUser=mongoose.model('GoogleUser',googleUserSchema);
module.exports=googleUser;