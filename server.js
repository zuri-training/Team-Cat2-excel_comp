const express = require('express');
const connectDB = require('./db/database');
const { PORT } = process.env;

require('dotenv').config();

// Connect to database
connectDB;

// Initialize express
const app = express();

// Initialize middleware
app.use(express.json({extended: false }));

// Create express route
app.get('/', (req, res) => res.json({ message: 'Welcome to Excel Comp'}));

//PORT 
const port = process.env.PORT || PORT;

app.listen(port, () => console.log(`server is listening on port ${port}`));