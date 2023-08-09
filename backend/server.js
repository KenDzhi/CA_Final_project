const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const port = 5000;

app.use(express.json());
app.use(cookieParser());

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

//API rodantis error'us consoleje
app.use((error, req, res, next) => {
  if (process.env.NODE_ENV === "development") {
    console.error(error);
  }
  next(error);
});

//API's rodantys error'us browser'yje
app.use((error, req, res, next) => {
  if (process.env.NODE_ENV === "development") {
    res.status(500).json({
      message: error.message,
      stack: error.stack,
    });
  } else {
    res.status(500).json({
      message: error.message,
    });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
