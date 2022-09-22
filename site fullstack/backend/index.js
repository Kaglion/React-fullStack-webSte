import express from 'express';
import {  ServerApiVersion }  from 'mongodb';
import { MongoClient } from 'mongodb-legacy';
import dotenv from 'dotenv';
const app = express();
const port = 4000;  
 
app.use(express.json())
dotenv.config()

const uri = process.env.STRING_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


app.get("/", (_, res) => {

    client.connect( (err, db) => { 
        console.log('Connexion success with MongoDB');
        if (err || !db ) {return false;}

        db.db("blog").collection("posts").find().toArray( function (err, results) {
            if (!err) {
                // res.send(results);
                // console.log(results);
            }else{
                console.log('error');
            }
        } )
        // perform actions on the collection object
    //   client.close(); 
    });
})

const obj = {title : 'tile', content: 'Content ...'}
app.post("/insert", (req, res) => {
    client.connect((err, db) => {
        if (err || !db) { return false; }
        db.db('blog').collection('posts').insertOne(req.body, function (err, results) {
            if (!err) {
                res.status(200).send(results)
            }
        })
    })
} )

app.listen(port, () => {
    console.log('Serveur demarre avec succes sur le port 4000 ');
} )