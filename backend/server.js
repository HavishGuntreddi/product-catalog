const express = require("express");
require("dotenv").config();
const path = require("path")
const mongoose = require("mongoose")

//DB connection
const connectionDB = require("./config/db");

//routes
const productRoute = require("./routes/products.route");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());


app.use("/api/products", productRoute);


if(process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "..", "/client/dist")))

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname,  ".." ,"client", "dist", "index.html"));
  })
}

app.listen(PORT, () => {
  connectionDB();
  console.log("Server started");
});
