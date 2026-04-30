const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send({status:1,msg:"This is api"})
})

app.listen("8000",()=>{
    console.log("your server run at this port 8000");
    
})