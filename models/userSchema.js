const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
},{timestamps:true}
)

const User=mongoose.model('USER',userSchema);
module.exports=User;