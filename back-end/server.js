const express = require("express");
const cors = require("cors");
const user = require("./routes/api/createUsers");
const login = require("./routes/api/login");
const alphaReq = require("./routes/alphaReq");
const mongoose = require("mongoose");
require("dotenv").config();
const dbURI =
  "mongodb+srv://karan:warraich7303@cluster0.14mhv.mongodb.net/stock-data?retryWrites=true&w=majority";
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const port = 5000;
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    app.listen(port, () => {
      console.log(`The server is running on port: ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
app.use("/signUp", user);
app.use("/login", login);
app.use("/AlphaVantageReq", alphaReq);
