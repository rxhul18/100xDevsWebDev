const express = require("express");

const app = express();
app.use(express.json());

const users = [];

const ransdomString = () => {
  return Math.random().toString(18).substring(7);
};

app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  users.push({
    username: username,
    password: password,
  });

  res.json({
    message: "User created successfully",
  });
});

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (users.find((u) => u.username === username)){
    res.json({
      message: "User logged in successfully",
    });
  }else{
    res.json({
      message: "User not found",
    });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
