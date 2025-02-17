import express from 'express';
const app = express()
import { MongoClient } from 'mongodb';
const port = 8000;
// import ejs from 'ejs'
const uri = "mongodb+srv://sz1769193:BfOv86w9zUEJx2rW@codegirls.fzzjy.mongodb.net/?retryWrites=true&w=majority&appName=Codegirls"



// async function add() {
//     const client = new MongoClient(uri)
//     var await2 = await client.connect();
//     const myDB = client.db("crudapp");
//     const myColl = myDB.collection("users");


//     const doc = [
//         { 
//         name: "Neapolitan pizza",
//          shape: "round",
//           timestamp:new Date() 
//     },
//         {
//             name: "Sani ",
//             shape: "round",
//              timestamp:new Date() 

//         }];
//     const result = await myColl.insertMany(doc);
//     console.log(
//         `A document was inserted with the _id: ${result.insertedId}`,
//     );

// }

// app.get("/", async (req, res) => {
//     await add();
// })
async function update() {
    const client = new MongoClient(uri);
    try {
        // Connect to MongoDB
        await client.connect();
        const myDB = client.db("crudapp");
        const myColl = myDB.collection("users");

        // The filter to find the document
        const filter = { _id: "67ac3e630fed70844ca23ff3" };

        const updateDoc = {
            $set: { 
                shape: "square", 
                timestamp: new Date() 
            }
        };


   // Use updateMany instead of updateOne for time-series collections
   const result = await myColl.updateMany(filter, updateDoc);  // <-- Changed here
   console.log(`Matched ${result.matchedCount} documents and modified ${result.modifiedCount} documents`);    } catch (err) {
        console.error('Error updating document:', err);
    } finally {
        // Ensure client closes connection after operation
    }
}

// Set up route to trigger the update function
app.get("/", async (req, res) => {
    try {
        await update();
        res.send("Document updated successfully.");
    } catch (err) {
        res.status(500).send("Error updating document.");
    }
});
app.listen(port, () => {
    console.log("running")
})

