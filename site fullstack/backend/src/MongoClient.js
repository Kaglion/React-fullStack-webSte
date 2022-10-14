import dotenv from "dotenv";
import {  ServerApiVersion }  from 'mongodb';
import { MongoClient } from 'mongodb-legacy';

dotenv.config(); 

const uri = process.env.STRING_URI;
const DATABASE = "blog";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })
module.exports = {
   client: (callback) => {
      client.connect((err, db) => {
         if (err || !db) { return false }
         callback(db.db(DATABASE))
      });
   }
}
