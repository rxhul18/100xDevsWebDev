import express from "express";
import jwt from "jsonwebtoken"
const JWT_SCERET = "ilovekavita";
const app = express();
app.use(express.json());

const users = [];

app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (!users.find((u) => u.username === username)) {
    users.push({
      username: username,
      password: password,
    });
    console.log(users);
    res.json({
      message: "User created successfully",
    });
  } else {
    res.status(403).send({
      message: "Users exist",
    });
  }
});

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  let founduser = null;

  for (let i = 0; i < users.length; i++) {
    if (users[i].username == username && users[i].password == password) {
      founduser = users[i];
    }
  }

  if (founduser) {
    const token = jwt.sign({  //Encyrt or encoding the token
      username: username
    }, JWT_SCERET);
    
    res.json({
      message: "User logged in successfully",
      token:token
    });
  } else {
    res.status(403).send({
      message: "Invaild username and password",
    });
  }
});

app.get("/me", (req,res) => {
  
  const token = req.headers.token //jwt
  const decodedInformation = jwt.verify(token,JWT_SCERET)
  const username = decodedInformation.username

  let foundUser = null;
  for (let i = 0; i < users.length;i++){
    if(users[i].username == username){
      foundUser = users[i]
    }
  }
  
  if(foundUser){
    res.json({
      username:foundUser.username,
      password:foundUser.password,
    })
  } else{
    res.status(403).send({
      message:"Token Invalid"
    })
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
