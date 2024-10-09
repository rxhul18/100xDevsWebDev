const express = require("express");

const app = express();

app.get('/',function(req,res){
    res.json({
        msg: "Hello World"
    })
})

app.get("/sum", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    const anum = parseInt(a);
    const bnum = parseInt(b);
    res.json({
        ans: anum + bnum
    })
});

app.get("/multiply", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    const anum = parseInt(a);
    const bnum = parseInt(b);
    res.json({
        ans: anum * bnum
    })
});

app.get("/divide", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    const anum = parseInt(a);
    const bnum = parseInt(b);
    res.json({
        ans: anum / bnum
    })
});

app.get("/subtract", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    const anum = parseInt(a);
    const bnum = parseInt(b);
    res.json({
        ans: anum - bnum
    })
});

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
});
