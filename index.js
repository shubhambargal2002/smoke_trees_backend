const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");

// middlewares
app.use(express.json());
app.use(cors());

// database
require("./db");

// routes
app.use(require("./routes/user"));

app.listen(port, () => {
  console.log(`I-notebook server is listening at https://localhost:${port}`);
});
