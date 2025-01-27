import express from 'express'
const app = express();
const port = 8000;

const parent = {
    name : "abc",
    mother : () => {
     return 'house wife'+this.name;
    }
}

app.get("/lop" (req,res) => {
    
})

console.log(parent)
