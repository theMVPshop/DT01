const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const app = express();
const cors = require("cors");

const usersRouter = require("./routes/users");
const blogsRouter = require("./routes/blogs");
const emailsRouter = require("./routes/emails");
const peekalinkRouter = require("./routes/peekALink");

//Server Port 4001

const port = process.env.PORT || 4001;
// express.static line 15 tells host what to run regarding the react app
app.use(express.static("build"));
app.use(bodyParser.json());

let corsOptions = {
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions), function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Content-Type", "application/json");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, authorization"
  );
  res.header("Access-Control-Allow-Methods", "*");
  next();
});

app.use(
  "/",
  cors(corsOptions),
  usersRouter,
  blogsRouter,
  emailsRouter,
  peekalinkRouter
);

// app.use(usersRouter);
// app.use(blogsRouter);
// app.use(emailsRouter);

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});
