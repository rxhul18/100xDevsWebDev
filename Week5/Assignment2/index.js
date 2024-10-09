const express = require('express');
const cors = require('cors');

const PORT = 5050;
const app = express();
app.use(express.json());
// app.use(cors());

let visitsCount = 0;
const visitCountIncrement = (req,res,next) =>{
  visitsCount = visitsCount + 1;
  next()
  return visitsCount
}

app.get('/admin',function(req,res){
  res.json({
    totalVisitCount: visitsCount
  })
})

app.get('/',function(req,res){
  res.send("Server is jinda bhai")
})

app.use(visitCountIncrement);

app.get('/sum',function(req,res){
  res.send(`Total numbers of vists is ${visitsCount}`);
})

app.get('/sub',function(req,res){
  res.send(`Total numbers of vists is ${visitsCount}`);
})

app.get('/todo',function(req,res){
  res.send(`Total numbers of vists is ${visitsCount}`);
})

app.get('/write',function(req,res){
  res.send(`Total numbers of vists is ${visitsCount}`);
})

app.listen(PORT,function(req,res){
  console.log(`Server is running on PORT ${PORT}`)
})