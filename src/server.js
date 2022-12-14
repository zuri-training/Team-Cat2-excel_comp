const express = require('express');
const connectDB = require('./db/database');
const userRoutes = require('./routes/userRoute');
const { PORT } = process.env;

// const bodyparser = require('body-parser');
// app.use(bodyparser.urlencoded({ extended: true }));
// app.use(bodyparser.json({limit: '10mb'}));

require('dotenv').config();

// Connect to database
connectDB;

// Initialize express
const app = express();

app.use('/api/auth', userRoutes);

// Initialize middleware
app.use(express.json({extended: false }));

// Create express route
app.get('/', (req, res) => res.json({ message: 'Welcome to Excel Comp'}));

//PORT 
const port = process.env.PORT || PORT;

app.listen(port, () => console.log(`server is listening on port ${port}`));