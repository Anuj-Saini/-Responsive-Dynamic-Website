const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/Dyanamic",{}).then(()=>console.log("connect data sucessfully")
).catch((err)=>{console.log(err)});