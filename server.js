const dotenv = require("dotenv");
const mongoose = require("mongoose");
const { isRequired } = require("nodemon/lib/utils");
dotenv.config({path:'./config.env'});

const app = require("./app");
const port = process.env.PORT || 3000


mongoose.connect(process.env.DATABASE,{
  useNewUrlParser:true,
  useCreateIndex:true,
  useFindAndModify:false,
}).then(()=>{
  console.log("DB is successfully connected");
}).catch(err=>{
  console.log(`error : ${err}`);
});


app.listen(port, "127.1.1.0", () => {
  console.log("listening on port ",port);
});
