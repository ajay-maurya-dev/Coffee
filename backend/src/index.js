const express = require('express');
const connectDB = require('./db/db.js');
require('dotenv').config();

// Connect to MongoDB
connectDB();

const app = express();

app.get('/',(req,res)=>{
    res.send({status:1,msg:"This is api"})
})

app.get('/api',(req,res)=>{
    res.send({status:2,msg:"This is api"})
}
)
app.listen(process.env.PORT,()=>{
    console.log(`your server run at this port ${process.env.PORT}`);
    
})