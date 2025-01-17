import express from 'express'


let user = new Promise((resolve , reject) => {

    const userid = 3;
    if(userid === 2){
        resolve("success");

    }
    else{
        reject("fail")
    }
});

user.then((message)=>{
    console.log("the result is " + message)
}).catch((message) => {
    console.log("the result is" + message)
})