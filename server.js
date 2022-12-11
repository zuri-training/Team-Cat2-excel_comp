const express = require('express');
const connectDB = require('./src/db/database');
const user = require('./src/routes/userRoute')
// const { PORT } = process.env;

require('dotenv').config();

// Connect to database
connectDB;
// Initialize express
const app = express();

// Initialize middleware
app.use(express.json({ extended: false }));
app.use("/user", user)

// Create express route
app.get('/', (req, res) => res.json({ message: 'Welcome to Excel Comp'}));

//PORT
// const port = process.env.PORT || PORT;
const port = 3000

app.listen(port, () => console.log(`server is listening on port ${port}`));