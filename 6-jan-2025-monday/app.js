import express from 'express'
const app = express();
const port = 3000;

// routing practice

app.get('/',(req,res) => {
    res.send("hello");
})
app.listen(port,()=>{
    console.log("server is running");
})