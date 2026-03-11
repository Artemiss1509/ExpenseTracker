const mongoose = require('mongoose');
const DB_URI = "mongodb+srv://rohansunil32_db_user:JIeKSb84EmE3MOXa@subcluster.ahakprt.mongodb.net/?appName=SubCluster"

const connectToDatabase = async ()=>{
    try {
        await mongoose.connect(DB_URI);
        console.log(`Connected to database in DEV mode`)
    } catch (error) {
        console.log('Error connecting to DB:', error)
        process.exit(1);
    }
}

module.exports = connectToDatabase;