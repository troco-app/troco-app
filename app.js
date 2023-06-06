require("dotenv").config();
const express = require("express");
const cors = require("cors");
const indexRouter = require("./src/routes/index-router");

const app = express();
const PORT = 8080;
app.listen(PORT, () => {
  console.log("Server iniciado en el puerto " + PORT);
});

app.use(indexRouter);