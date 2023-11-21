const express = require("express");
const router = express.Router();
const RequestController = require("../controllers/RequestController")

router.get("/requests", RequestController.index);

module.exports = router;