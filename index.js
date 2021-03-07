const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
//Routes
const mainRouter = require("./routes/mainRoute");
const registerRouter = require("./routes/registerRoute");
const loginRouter = require("./routes/loginRoute");
const todoRouter = require("./routes/todoRoute");


const app = express();
require('dotenv').config();

app.set("view engine", "ejs");

app.use("/static", express.static("public"));

app.use(express.json());

app.use(express.urlencoded({extended: false}))

app.use(bodyParser.json())

app.use(cookieParser())


// app use routes
app.use(mainRouter);
app.use(registerRouter);
app.use(loginRouter);
app.use(todoRouter);


mongoose.set("useFindAndModify", false);

const options = {
  useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true,
};

mongoose.connect(
    process.env.DATABASE_URL,options,
    (err) => {
      console.log(err);
      if (err) return;
      console.log("Connected to database!");
  
      app.listen(process.env.PORT, (err) =>
       console.log("App is running")
      );
    }
  );