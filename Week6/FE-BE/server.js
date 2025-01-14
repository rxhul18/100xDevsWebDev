const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "ilovekavita";

const app = express();

app.use(express.json());

const users = [];

app.get("/", (req, res) => {
  res.sendFile(__dirname+"/public/index.html")
});

function logger(req, res,next){
  console.log(`${req.method} request came`)
  next();
}

app.post("/signup", logger, (req, res) => {
  const { username, password } = req.body;
  if (!users.find((u) => u.username === username)) {
    users.push({
      username,
      password,
    });
    res.json({
      message: "User created successfully",
    });
    console.log(users);
  } else {
    res.send("User already exists");
  }
});

app.post("/signin",logger, (req, res) => {
  const { username, password } = req.body;
  let foundUser = null;
  for (let i = 0; i < users.length; i++) {
    if (users[i].username === username && users[i].password === password) {
      foundUser = users[i];
    }
  }

  if (!foundUser) {
    res.status(403).send({
      message: "Invaild username and password",
    });
  } else {
    const token = jwt.sign(
      {
        username: foundUser.username,
      },
      JWT_SECRET
    );
    res.header("token",token)
    res.json({
      message: "User logged in successfully",
      token: token,
    });
  }
});

function auth(req,res,next) {
  const token = req.headers.token;
  const decodedData = jwt.verify(token, JWT_SECRET)
  
  if(decodedData.username){
    req.username = decodedData.username
    next()
  }else{
    res.json({
      message:"You are not logged in"
    })
  }
}

app.get('/me',auth,logger,(req,res)=>{

    let foundUser = null
    for (i = 0; i < users.length; i ++){
      if(users[i].username === req.username  ){
        foundUser = users[i]
        console.log("user succesfully finded")
      }
    }
    
    res.json({
      username:foundUser.username,
      password:foundUser.password
    })
})

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
