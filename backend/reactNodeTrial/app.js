const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoute");

const app = express();
//Connect DB
mongoose
  .connect("mongodb://127.0.0.1:27017/ReactNodeTrial")
  .then(() => console.log("DB Connected!"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRoutes);

const port = 3000;
app.listen(port, () =>{
    console.log(`App started on port ${port}`)
});