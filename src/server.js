const express = require("express");
const cors = require('cors');
const connectDB = require("./db/database");
const authRoutes = require("./routes/authRoute");
const cookieParser = require('cookie-parser');
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
app.use(cookieParser());


// authroute
app.use('/auth', authRoutes);

app.use(cors());

if (process.env.NODE_ENV === 'production') {
  //*Set static folder
  app.use(express.static('../client/build'));
  
  app.get('*', (req, res) => 
    res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'))
  );
}

//cookies
app.get('/set-cookies', (req, res) => {
  res.cookie('newUser', false);
  res.cookie('isEmployee', true, { 
    maxAge: 1000 * 60 * 20 * 24,
    httpOnly: true
  });
  res.send('you got the cookie!');
});

app.get('/read-cookies', (req, res) => {
  const cookies = req.cookies;
  console.log(cookies);
  res.json(cookies);
});

// Create express route 
app.get("/api", (req, res) =>
  res.json({
    message: "Welcome to Excel Comp",
  })
);

//PORT
const port = process.env.PORT || PORT;

app.listen(port, () => console.log(`server is listening on port ${port}`));

