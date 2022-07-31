const mongoose=require("mongoose");
const validator=require("validator");
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:3
    },
    lastname:{
        type:String,
        required:true,
        minLength:3
    },
    email:{
          type:String,
          required:true,
          validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid")
            }
          }
        
    },
    message:{
        type:String,
        required:true,
        minLength:3
    }
})
const User=mongoose.model("User",userSchema);
module.exports=User;