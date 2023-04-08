require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const http = require("http");
const router = require("./router/index");
const errorMiddleware = require("./middleware/error.middleware.js");

const PORT = process.env.PORT || 5000;
const app = express();

const server = http.createServer(app);

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    // credentials: true,
    origin: '*',
    optionSuccessStatus: 200,
  })
);
app.use("/api", router);
app.use(errorMiddleware);

const start = async () => {
  try {
    mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    server.listen(PORT, () =>
      console.log(
        `Server started in ${process.env.NODE_ENV} mode on PORT = ${PORT}`
      )
    );
  } catch (e) {
    console.log(e);
  }
};

start();
