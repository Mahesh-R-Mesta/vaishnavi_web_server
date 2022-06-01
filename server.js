const dotenv = require("dotenv");
dotenv.config({path:'./config.env'});

const app = require("./app");
const port = process.env.PORT || 3000

app.listen(port, "127.1.1.0", () => {
  console.log("listening on port ",port);
});
