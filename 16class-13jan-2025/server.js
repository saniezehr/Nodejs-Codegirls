import express from 'express'
import ejs from 'ejs'

const app = express();

const port = 3000;

app.set('view engine',"ejs")

app.get("/user/:id" , (req , res ) => {


    const users = [
        {id : 1 ,name : "Ali"     , age:26},
        {id : 2 ,name : "Sara"    , age:14},
        {id : 3 ,name : "Fizza"   , age:15},
        {id : 4 ,name : "Miraal"  , age:22},
        {id : 5 ,name : "Thanos"  , age:20},
        {id : 6 ,name : "Haisum"  , age:18},
        {id : 7 ,name : "Daniyal" , age:17},
        {id : 8 ,name : "Warisha" , age:20},
        {id : 9 ,name : "Azlaan"  , age:30},
        {id : 10,name : "Maisum"  , age:19},
    
    ]
    
    const userId = parseInt(req.params.id);
    const user = users.find(users => users.id === userId);

    // if(!user){
    //     res.status(404).send("User Not Found");
    // }

    // else if (user.age < 18){
    //     res.status(403).send("'User is under 18 and access is not allowed");
    // }
    // else{
    //     res.send(`<pre>${JSON.stringify(user,null,2)}</pre>`)
    // }

    res.render(
        'user',{
            data :users
        }
    )
})
app.listen(port)