import 'dotenv/config';
import express from 'express';
import {MongoClient} from  'mongodb';

const app =express();
const port  = 3001;


const connection = new MongoClient(process.env.MONGO_URI);

app.get('/',async (req,res)=>{
    try{
       await connection.connect();
       await connection.db("admin").command({ping:1});
        res.send('Successfully connected to the database!')
        
    }catch(e){

        console.log(e)

    }finally{
        await connection.close();
    }
});

app.listen(port, ()=>{
console.log('Server running successfully on port: '+ port);
})