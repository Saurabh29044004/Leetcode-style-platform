const mongoose = require('mongoose');

async function main() {
    try {
        // Agar tumne .env me MONGODB_URI rakha hai toh ye use karega
        // Agar tumne DB_CONNECT_STRING hi chhoda hai, toh process.env.DB_CONNECT_STRING likhna
        const url = process.env.MONGODB_URI || process.env.DB_CONNECT_STRING; 
        
        await mongoose.connect(url);
        console.log("Database connected successfully! 🎉");
    } catch (error) {
        console.error("Database connection error: ", error);
        process.exit(1);
    }
}

module.exports = main;