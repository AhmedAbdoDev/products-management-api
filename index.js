const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "works" });
});

require("./Database/connect");
let products = require("./routes/products");
app.use("/api/products", products);
let PORT = process.env.PORT;
app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
