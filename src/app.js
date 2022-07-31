const { hasSubscribers } = require("diagnostics_channel");
const express=require("express");
const path=require("path");
const User=require("./modules/mod");
const hbs=require("hbs");
require("../src/db/conn");
const app=express();
app.use(express.urlencoded({extended:false}))
const port=process.env.PORT || 3000;
const staticPath=path.join(__dirname,"../public");
const templatePath=path.join(__dirname,"../templates/views");
const partialspath=path.join(__dirname,"../templates/partials");
app.use(express.static(staticPath));
app.set("view engine","hbs");
app.set("views",templatePath);
hbs.registerPartials(partialspath);
app.use("/css",express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
app.use("/js",express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")));
app.use("/jq",express.static(path.join(__dirname,"../node_modules/jquery/dist")));
app.get("/",(req,res)=>{
    res.render("index");
})
app.post("/contact",async(req,res)=>{
    try {
       
        const UserData=new User(req.body);
        await UserData.save();
        res.status(201).render("index");
        
    } catch(error) {
        res.status(500).send(error)
    }
})
app.listen(port,()=>{
    console.log(`connection is working at ${port}`)
})