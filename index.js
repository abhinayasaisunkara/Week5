const express = require("express");
const bodyParser = require("body-parser");

const generalRoutes = require("./routes/general");
const authRoutes = require("./routes/auth");

const app = express();

app.use(bodyParser.json());

app.use("/books", generalRoutes);
app.use("/auth", authRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});