const jwt = require('jsonwebtoken');
const zod = require('zod');
const jwtSecret = 'ilovekvt';

const usernameSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

function SignJwt(usernameas,passwordas){
  const username = usernameSchema.safeParse(usernameas);
  const password = passwordSchema.safeParse(passwordas);

  if(!username.success || !password.success){
    console.log(null);
    return null
  } else {
    const token = jwt.sign(username,jwtSecret)
    console.log(token);
    return token;
  }
}

function verify(token,jwtSecretParam){
  const jwtVerify = jwt.verify(token,jwtSecretParam);
  try{
    console.log(jwtVerify);
  } catch (e) {
    console.log(e,"error1");
  }
}

function decode(token){
  const jwtDecode = jwt.decode(token);
  if(!jwtDecode){
    console.log(false);
    return false;
  } else {
    console.log(jwtDecode);
    return jwtDecode;
  }
}

// SignJwt("rahul@gmail.com","Rahul1212")
verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWNjZXNzIjp0cnVlLCJkYXRhIjoicmFodWxAZ21haWwuY29tIiwiaWF0IjoxNzM2OTQ4MDM0fQ.V-c28Nd08GIVMIxf5NhyZ9JZUmUbJYoCBho6c3Baduk","ilovekvt")
