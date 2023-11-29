const express = require("express");
const mongoose = require("mongoose");

// init app
const PORT = process.env.PORT || 4000;
const app = express();

//connect to db
const DB_USER = "root";
const DB_PASSWORD = "example";
const DB_PORT = 27017;
const DB_HOST = "172.27.0.2";

const URI = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`;
mongoose
  .connect(URI)
  .then(() => console.log("connected to db..."))
  .catch((err) => console.log("failed to connect to db: ", err));

app.get("/", async (req, res) => {
  res.send(`<h1> Hello Tresmergesdasd!</h1>`);
});

app.listen(PORT, () => console.log(`app is up and running on ${PORT}`));
