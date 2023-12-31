const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config()
const port=process.env.PORT || 5000;

// middlewares
app.use(express.json());
app.use(cors());

// database
require("./db");

// routes
app.use(require("./routes/user"));

app.listen(port, () => {
  console.log(`Smoke Trees server is listening at https://localhost:${port}`);
});
