const express=require("express")
const body=require("body-parser");
const mongoose = require("mongoose");
const app=express()
app.use(body.urlencoded({extended:true}))
app.use(express.static("public"))


mongoose.connect("mongodb+srv://Bipintp:bipin123@cluster0.5zmsh59.mongodb.net/logindb",{useNewUrlParser:true})

const userschema=mongoose.Schema({name:String})

const usermodel=mongoose.model("userdata",userschema)

app.get("/",function(req,res){

    usermodel.find().then((name,password) => {
        res.render('index', {name:name,password:password})
        console.log(result)

    }).catch((err) =>{

        console.log(err)
    });    
})

app.post("/",function(req,res){

    var name=req.body.name
    var password=req.password
    const userdata=new usermodel({"name":string,"password":string})
    name.save()
    password.save()
    res.redirect("/login")
    
})

app.listen(process.env.PORT ||3000,function(){
    console.log("Server is started")
})
