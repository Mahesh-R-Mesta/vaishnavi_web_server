const app = require("./app");

app.listen(4000, "127.1.1.0", () => {
  console.log("listening on port 4000");
});
