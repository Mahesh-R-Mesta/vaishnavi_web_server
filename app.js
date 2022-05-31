const express = require("express");
const morgan = require("morgan");
const admin = require("./routes/admin");
const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded());

app.use("/api/v1/admin", admin);
app.post("/v1/post", (req, res) => {
  console.log(req.body);
  res.send("Done");
});

app.use((req, res) => {
  res.status(404).json({
    msg: "Error Occurred",
  });
});

module.exports = app;
