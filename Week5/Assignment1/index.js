const express = require('express');

const Port = 3030

const app = express();

function assgnMiddleFunction(req,res,next){
  console.log("Heeelo from this function")
  const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
  const timestamp = new Date().toISOString();
  console.log({
    fullUrl:fullUrl,
    method:req.method,
    timestamp:timestamp
  })
  next()
}

app.get('/',function(req,res){
  res.send("Server is Jinda bhai!!!!")
})

app.use(assgnMiddleFunction)

app.get('/sum',function(req,res){
  res.send("Sum from sum page!!!!")
})
app.get('/add',function(req,res){
  res.send("Add from add page!!!!")
})
app.get('/sub',function(req,res){
  res.send("Sub from Sub page!!!!")
})

app.listen(Port,()=>{
  console.log(`App is listening on port ${Port}`)
})