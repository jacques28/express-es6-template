import mongoose from 'mongoose';
import 'dotenv/config'

mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, userUnifiedTopology: true })
    .then(() =>{
        console.log("Connected to MongoDB");
    })
    .catch((err)=>{
        console.log("Not connected to MongoDB:", err);
    });
    // Add db schema here

export default db;