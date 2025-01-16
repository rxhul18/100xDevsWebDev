const jwt = require("jsonwebtoken")
const JWT_SECRET = 'ilovekvt'

const auth = async(req,res,next) => {
    const token = req.headers.token
    const decodedData = jwt.verify(token,JWT_SECRET)
    if (decodedData) {
        req.userId = decodedData.id ;
        console.log(decodedData.id);
        next();
    }else{
        res.status(403).json({
            message:"incorrect credentials"
        })
    }
}


module.exports = { 
    auth,
    JWT_SECRET
}