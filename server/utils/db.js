const mongoose = require("mongoose");
const URI = process.env.MONGODB_URI;
// mongoose.connect(URI);
const connectdb = async()=>{
    try{
        await mongoose.connect(URI);
        console.log("Connection succesfull");
        
    }
    catch(error){
        console.error("Database connection failed");
        throw error;
    }
};
module.exports = connectdb;
