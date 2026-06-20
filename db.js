import mongoose from "mongoose";

//Define the mongoDB connection URL
// const mongoURL = 'mongodb://localhost:27017/hotels';  //Replace mydatabase with your db name

// const mongoURL = 'mongodb+srv://amitwarval22_db_user:connect12345@cluster0.abmnuik.mongodb.net/';

import dotenv from 'dotenv';
dotenv.config();
const mongoURL = process.env.MONGODB_URL;

//setup mongodb connection
mongoose.connect(mongoURL)
    .then(() => console.log('Database connected successfully!'))
    .catch(err => console.error('Connection error', err));

//get the default connection
//mongoose maintains a default connection object representing the mongoDB connection
const db=mongoose.connection;

//define event listeners for db connection
db.on('connected',()=>{
    console.log("Connected to mongoDB server");
})

db.on('error',()=>{
    console.log("mongoDB connection error");
})

db.on('disconnected',()=>{
    console.log("MongoDB Disconnected")
})


//export the db connection
export default db;