import { Connection } from './../node_modules/mongodb/src/cmap/connection';
import mongoose from 'mongoose';
const connectionString=`S{process.env.MOGO_DB_USERNAME}`

if(!connectionString){
    throw new Error ("Please provide a valid connection string");
}

const connectDB = async () => {
    if(mongoose.Connection?.readyState >=1){
        console.log("--- Already connected to MongoDB ----");
        return;
    }

    try {
        console.log("---- Connecting to MongoDB ----")
        await mongoose.connect(connectionString);
    } catch (error) {
        console.log("Error connecting to MongoDB:",error)
        
    }
}