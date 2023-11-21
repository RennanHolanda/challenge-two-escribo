require("dotenv").config();
const express = require("express");
const app = express();

const port = process.env.PORT;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const requestRouter = require("./src/routes/RequestRouter");

app.use(requestRouter)

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
