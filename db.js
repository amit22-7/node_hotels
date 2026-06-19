import mongoose from "mongoose";

//Define the mongoDB connection URL
const mongoURL = 'mongodb://localhost:27017/hotels';  //Replace mydatabase with your db name

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