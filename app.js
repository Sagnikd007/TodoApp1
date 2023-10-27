
const express = require("express");
const mongoose = require("mongoose");

// Create an Express application
const app = express();

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017", {
  useNewUrlParser: true, // Fix typo: 'true' should be true
  useUnifiedTopology: true, // Fix typo: 'true' should be true
});

// Middlewares
app.use(express.urlencoded({ extended: true })); // Fix typo: 'true' should be true
app.use(express.static("public"));
app.set('view engine', 'ejs');
//app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', require('ejs').renderFile);



app.use(require("./routes/index"));
app.use(require("./routes/todo"));
// Server configuration
app.listen(3000, () => console.log("Server started listening at port 3000"));



