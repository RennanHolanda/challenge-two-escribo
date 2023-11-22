require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const requestRouter = require("./src/routes/RequestRouter");

app.use(requestRouter);

const port = process.env.PORT;
const dbUser = process.env.DB_USER;
const dbPasswoard = process.env.DB_PASS;

mongoose
  .connect(
    `mongodb+srv://${dbUser}:${dbPasswoard}@cluster0.gjshlpj.mongodb.net/`
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`connected to the bank`);
    });
  })
  .catch((err) => console.error(err));
