import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"
import dotenv from "dotenv"

dotenv.config()

const connectDB = async () => {
    try{
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`\n Mongodb connected. DB HOST:  ${connectionInstance.connection.host}`);
        
    }
    catch(error){
        console.log("Mongodb connection error", error);
        process.exit(1)
    }
}

export default connectDB