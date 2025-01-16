const express = require('express');
const { UserModel, TodoModel} = require("./db")
const jwt = require("jsonwebtoken");
const Connection = require('./config');
const { auth, JWT_SECRET } = require('./auth');

const app = express();
Connection()

app.use(express.json());

app.post("/signup", async function(req,res){
    const email = req.body.email
    const password = req.body.password
    const name = req.body.name
    const isExist = await UserModel.findOne({
        email:email,
        password:password,
    })
    if(isExist){
        console.log("User with same id already exist");
        res.json({
            message:"User with same id already exist"
        })
    }else{
        await UserModel.create({
            email:email,
            password:password,
            name:name
        })
        console.log("Succesfully signedup");
        res.json({
            message:"You are succesfully signed"
        })
    }
})
app.post("/signin", async function(req,res){
    const email = req.body.email
    const password = req.body.password

    const user = await UserModel.findOne({
        email:email,
        password:password
    })
    console.log(user);
    if(user){
        const token = jwt.sign({
            id: user._id.toString()
        },JWT_SECRET)
        res.header("token",token) 
        res.json({
            token:token
        })    
        console.log("Loged in Succesfully");
    }else{
        res.json({
            message:"Incorrect credential"
        },403)
    }
})
app.post("/todo",auth, async function(req,res){
    const userId = req.userId
    const title = req.body.title
    const done = req.body.done

    await TodoModel.create({
        userId:userId,
        title:title,
        done:done
    })
    console.log("Todo created succesfully");
    res.json({
        message:"Created to of user",
        userId: userId
    })
})
app.post("/todos",auth, async function(req,res){
    const userId = req.userId;

    const todos = await TodoModel.find({
        userId
    });
    console.log(todos,"todos");
    
    res.json({
        todos
    })
})

app.listen(3000,()=>{
    console.log("App is running on port 3000");
})