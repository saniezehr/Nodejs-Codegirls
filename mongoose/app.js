import mongoose from 'mongoose'
import express from 'express'
import 'dotenv/config'
const app = express();
const port = 8000;


async function main() {
    await mongoose.connect(process.env.uri)
    const kittenSchema = new mongoose.Schema({
        name: String,
        age : Number
    })

    // const kitten = mongoose.model('kitten',kittenSchema);
    // const hazel=new kitten({name:'hazel',age:23})
    // hazel.save().then(()=>console.log(hazel.name,hazel.age))

    kittenSchema.methods.speak=function speak(){
        const greeting = this.name
        ? 'Meow name is '+this.name
        :'i dont have';
        console.log(greeting);

    }
    const kitten = mongoose.model('kitten',kittenSchema);

    const fluffy = new kitten({name:'catty',age:25});
   await fluffy.save()
    fluffy.speak();
}


main();