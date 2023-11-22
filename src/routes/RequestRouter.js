const express = require("express");
const router = express.Router();
const RequestController = require("../controllers/RequestController");
const verifyAuth = require("../middlewares/verifyAuth");

router.get("/user/:id", verifyAuth, RequestController.user);
router.post("/auth/register", RequestController.register);
router.post("/auth/login", RequestController.login);

module.exports = router;
