import fs from 'fs';
const read = "./";

// read directory
fs.readdir(read,(err,file)=>{
console.log(file);
})

// read file

fs.readFile("readwrite.js","utf8",(err,file) =>{
    if(err){
        console.log("file not found");
    }
    console.log(file)
})

// difference between append and write is that write replacing the data but append is added the data to existing data and in both if file is not exist they create a new file
//write file
const data ="HI ,HOW ARE YOU :)";
fs.writeFile("write.js",data , () => {
    console.log(data)
} )
//append file

const append = "added data into existing data";

fs.appendFile("read.js",append,()=>{
    // if(err)console.log("file not found");
    console.log(append);
})

// new file path 

fs.rename("rename.js","newrename.js",(err,filepath)=>{
    if(err){
        console.log("file not found");
    }
    console.log(filepath)
})

// create a folder 
const folder ="/newfolder";
fs.mkdir(folder , (err,folders ) =>{
    console.log(folders)
});