
// write head ka function dom mai check karay ga kai yai file hai ya nhi
const http = require ('http');
const fs = require('fs');

 http.createServer(function(req,res){
    
// const filepath = path.join(directoryname,"./index.html");
fs.readFile('index3.html' , "utf-8" , (err,filedata)=> {

//     if(err){
// fs.readFile('404.html',(error,file) => {


//     if(error){
//         res.writeHead(404,{'content-type':'text/plain'});
//         res.end("file not found");
//         return;
//     }

//     res.writeHead(404,{'content-type':'text/html'});
//     res.end(file)
// }
// )
// return;


//     }
if(err){
    res.writeHead(301,{'location':'https://www.youtube.com/'})
    res.end()
}
    res.writeHead(200,{'content-type':'html'});

    // res.write(res);
    res.end(filedata)
})


}).listen(8000,'localhost');

;