require("dotenv").config();
require("./database");
const express = require("express");
const cors = require("cors");
const router = require("./router/routes");

const app = express();
const PORT = process.env.PORT || 3333;

// middlewares
app.use(express.json());
app.use(cors());
app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
