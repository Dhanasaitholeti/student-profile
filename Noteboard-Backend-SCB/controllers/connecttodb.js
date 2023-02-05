const mongoose = require('mongoose');
const uri = "mongodb+srv://Dhanasaitholeti:newone@cluster0.nxo5ftc.mongodb.net/?retryWrites=true&w=majority"
mongoose.set('strictQuery',false);


const connecttodb = async (req,res) => {
    try{
        const db = await mongoose.connect(uri);
        console.log("Database is connected successfully");
    }
    catch(err){
        console.log("err connecting to the database");
    }
}

module.exports  = connecttodb;