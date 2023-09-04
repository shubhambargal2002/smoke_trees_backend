const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");

// middlewares
app.use(express.json());
app.use(cors());

app.listen(port,()=>{
    console.log(`I-notebook server is listening at https://localhost:${port}`)
})