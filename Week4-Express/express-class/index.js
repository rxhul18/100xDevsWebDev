const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

var users = [{
    name:'Rahul',
    kidneys:[{
        healthy:false
    }]
}]

app.use(express.json())

app.get('/',function(req,res){
    const rahulkindneys = users[0].kidneys;
    const numberOfKindeys = rahulkindneys.length
    fs.readFile('users.json', function(err,data){
      console.log(data.toString())
    })
    let numberOfHealthyKindeys = 0
    for (let i = 0; i < numberOfKindeys; i++){
      if(rahulkindneys[i].healthy){
        numberOfHealthyKindeys = numberOfHealthyKindeys + 1
      }
    }
    let numberOfUnhealtyKindeys = numberOfKindeys - numberOfHealthyKindeys
    res.json({
      totalNumberOfKindeys: numberOfKindeys,
      numberOfHealthyOne: numberOfHealthyKindeys,
      numberOfunhealtyOne: numberOfUnhealtyKindeys
    })
})

app.post('/',function(req,res){
  const isHealthy = req.body.isHealthy;
  const name = req.body.name;
  const data = {
    name: name,
    "kidneys":[{
        "healthy":true
    }]
  }
  fs.writeFile('users.json', data)
  users[0].kidneys.push({
    healthy: isHealthy
  })
  res.json({
    msg:"Done!!"
  })
})


app.post('/users/:username', function(req, res) {
  const username = req.body.name;
  
  // Read the existing users from the JSON file
  const filePath = path.join(__dirname, 'users.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error reading file' });
    }
    
    // Parse the JSON data
    let users = JSON.parse(data);

    // Add the new user
    users.push({
      name: username,
      kidneys: [{ healthy: true }]
    });s
    // Write the updated users array back to the file
    fs.writeFile(filePath, JSON.stringify(users, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ message: 'Error writing file' });
      }
      
      // Respond with the updated users
      res.json(users);
    });
  });
});

app.put('/',function(req,res){
  
  if(isThereAtLeastOneUnhealtyKidney()){
    for (let i = 0; i < users[0].kidneys.length; i++){
      users[0].kidneys[i].healthy = true;
    }
    res.json({
      mess: "Succesfully sabh done hoo gaya"
    })
  }else{
    res.status(411).json({
      mess:"go purchase an iphone "
    })
  }
  
})

app.delete('/',function(req,res){
  if(isThereAtLeastOneUnhealtyKidney()){
    const newKidneys = []
    for (let i = 0; i < users[0].kidneys.length; i++){
      if(users[0].kidneys[i].healthy){
          newKidneys.push({
            healthy:true
          })
      }
    }
    users[0].kidneys = newKidneys
    
    res.json({
      mess:"Done Bhai"
    })
  }else{
    res.status(411).json({
      mess:"You not have efficent unhealty kidneys broo, go purchase an iphone"
    })
  }
  
})

function isThereAtLeastOneUnhealtyKidney(){
  let atLeastOnehealtyKidney = 0;
  for (let i = 0; i < users[0].kidneys.length; i++){
    if(!users[0].kidneys[i].healthy){
      atLeastOnehealtyKidney = true
    }
  }
  
  return atLeastOnehealtyKidney
}

app.listen(3000,()=>{
    console.log('Server started at 3000');
})