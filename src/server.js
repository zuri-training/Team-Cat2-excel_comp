const express = require('express');
const connectDB = require('./db/database');
const authRoutes = require('./routes/authRoute');
const { PORT } = process.env;


require('dotenv').config();

// Connect to database
connectDB();

// Initialize express
const app = express();

app.use(authRoutes);

// Initialize middleware
app.use(express.json({extended: false }));
app.use(express.static('frontend/public'));

// Create express route
app.get('/', (req, res) => res.json({ message: 'Welcome to Excel Comp'}));

//PORT 
const port = process.env.PORT || PORT;

app.listen(port, () => console.log(`server is listening on port ${port}`));


// const bodyparser = require('body-parser');
// app.use(bodyparser.urlencoded({ extended: true }));
// app.use(bodyparser.json({limit: '10mb'}));