const express = require("express");
const mongoose = require("mongoose");
const app = express();
const morgan = require("morgan");
require("dotenv").config();
var cors = require("cors");
const bodyParser = require("body-parser");



//import Routes
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoute");
const jobTypeRoutes = require("./routes/jobTypeRoute");
const jobRoutes = require("./routes/jobRoutes");


const cookieParser = require("cookie-parser");
const errorHandler = require("./middleware/error");

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("DB Connect");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(morgan('dev'));
app.use(bodyParser.json({ limit: "5mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "5mb",
    extended: true,
  })
);
app.use(cookieParser());
app.use(cors());

//Routes Middlewaree
// app.get("/", (req, res) => {
//   res.send("hello node js");
// });
app.use("/",authRoutes)
app.use("/",userRoutes)
app.use("/type",jobTypeRoutes)
app.use("/api",jobRoutes)

//error middleware
app.use(errorHandler);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
