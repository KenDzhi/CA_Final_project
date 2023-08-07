const express = require("express");
const app = express();
const port = 3000;

const apiRoutes = require("./routes/apiRoutes");

app.get("/", (req, res) => {
  console.log("synchronous code");
  throw new Error("some error occured");
  res.json({ message: "API is running" });
});

app.get("/a", (req, res, next) => {
  setTimeout(() => {
    try {
      aconsole.log("async code");
    } catch (error) {
      next(error);
    }
  }, 1000);
  //   next(new Error("Some error occured"));
});

//API routes bus apdorojama apiRoutes.js faile.
app.use("/api", apiRoutes);

//API's kurie handlins error'us
// -> consoleje
app.use((error, req, res, next) => {
  console.error(error);
  next(error);
});

//Browseryje
app.use((error, req, res, next) => {
  res.status(500).json({
    message: error.message,
    stack: error.stack,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
