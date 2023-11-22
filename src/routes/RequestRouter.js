const express = require("express");
const router = express.Router();
const RequestController = require("../controllers/RequestController")

router.get("/", RequestController.index);
router.post("/auth/register", RequestController.register);
router.post("/auth/login", RequestController.login);

module.exports = router;