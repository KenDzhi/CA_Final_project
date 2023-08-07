const express = require("express");
const app = express();
const port = 3000;

const apiRoutes = require("./routes/apiRoutes");

app.get("/", (req, res) => {
  res.json({ message: "API is running" });
});

//Prisijungimas prie MongoDB
const connectToDB = require("./config/db");
const Product = require("./models/ProductsModel");
connectToDB();

//API routes bus apdorojama apiRoutes.js faile.
app.use("/api", apiRoutes);

//API rodantis error'us consolje
app.use((error, req, res, next) => {
  console.error(error);
  next(error);
});

//API's rodantys error'us browser'yje
app.use((error, req, res, next) => {
  res.status(500).json({
    message: error.message,
    stack: error.stack,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
