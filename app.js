const express = require("express");
const morgan = require("morgan");
const bodyParser  = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const admin = require("./routes/adminRoute");
const app = express();

if(process.env.NODE_ENV === 'development'){
  app.use(morgan("dev"));
}

app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());
app.use(cors());

app.use("/api/v1/admin", admin);

app.use((req, res) => {
  res.status(404).json({
    msg: "Not Found Error Occurred",
  });
});

module.exports = app;