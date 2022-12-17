const express = require("express");
const cors = require('cors');
const jwt = require('jsonwebtoken');
const connectDB = require("./db/database");
const authRoutes = require("./routes/authRoute");
const { PORT } = process.env;

const path = require("path");

require("dotenv").config();

// Connect to database
connectDB();

// Initialize express
const app = express();

// Initialize middleware
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: true} ));


// authroute
app.use('/auth', authRoutes);

app.use(cors());

if (process.env.NODE_ENV === 'production') {
  //*Set static folder
  app.use(express.static('client/build'));
  
  app.get('*', (req, res) => 
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

// Create express route 
app.get("/api", (req, res) =>
  res.json({
    message: "Welcome to Excel Comp",
  })
);


//PORT
const port = process.env.PORT || PORT;

app.listen(port, () => console.log(`server is listening on port ${port}`));

