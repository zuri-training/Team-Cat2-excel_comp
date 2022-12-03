/**
 * Create a connection function for mongodb
 * Start local mongodb server connection
 */

const mongoose = require('mongoose');
const { MONGO_URI } = process.env;

require('dotenv').config();

// Create connection function
// const connectDB = () => {
//     mongoose.connect(MONGO_URI, {
//         useNewUrlParser: true,
//         useCreateIndex: true,
//         useUnifiedTopology: true,
//         useFindAndModify: false
//     })
//     .then(() => {
//         console.log('MongoDB connected...');
//     })
//     .catch((err) => {
//         console.log(err.message);

//         process.exit(1);
//     })
// }

// Async mongoose connection
const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log('MongoDB connected...');

        // Seed data
    } catch (err) {
        console.error(err.message);

        process.exit(1);
    }
}

module.exports = connectDB;