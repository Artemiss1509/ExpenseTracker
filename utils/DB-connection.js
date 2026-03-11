const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({path: './utils/.env'})

const DB_URI = process.env.DB_URI;

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