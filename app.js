const express = require("express");
const mongoose = require("mongoose");
const app = express();
const APIRouter = require("./Routes/APIRouter"); 
const cors = require("cors");

const PORT = process.env.PORT || 5003;

const URI =
  
  "mongodb+srv://nehasonavane:R0r4rb6WxdU8jIVg@cluster0.vtfyho5.mongodb.net/test"
// to enable/access post data (body-parser)

app.use(cors()); // enable cors request

app.use(express.json()); // convert string JSON data to pure json data
app.use(express.urlencoded({ extended: false })); // normal post data  to json data

app.use("/", APIRouter);
console.log("connecting to db ....");
mongoose
  .connect(URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log("db connected successfully !!!");
      console.log("zomato api is running on port :", PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
