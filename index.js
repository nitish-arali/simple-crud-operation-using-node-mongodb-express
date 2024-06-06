import express from "express";
import mongoose from "mongoose";
import productRoute from "./Routes/product.route.js";

const app = express();

app.use(express.json()); // MiddleWare For Parsing the incoming JSON Object (using Body in PostMan)

// app.use(express.urlencoded({ extended: false })); //using Form Values in Postman

app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello Nitish");
});

//Connecting To A DB
mongoose
  .connect(
    "mongodb+srv://admin:admin123@backenddb.5dbwqhz.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to Database");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connnection Failed");
  });
