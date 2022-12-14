const mongoose = require('mongoose');
const { config } = require('dotenv');

mongoose.set('strictQuery', false);

config();

// Async mongoose connection
async function connectDB(uri) {
    try {
        await mongoose.connect(uri || process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully...')

    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;


