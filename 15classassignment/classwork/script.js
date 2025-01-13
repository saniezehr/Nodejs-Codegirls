import express from 'express'

const app =express();
const port = 3000;


app.use(express.json());

app.post('/data',(req,res) =>{
    const {name,age} =req.body;
    if(!name && !age){
        console.log("fields are required");
        res.status(400).json({
            error: "Fields are required";
    })
    }

})