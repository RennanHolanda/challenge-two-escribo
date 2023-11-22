// require("dotenv").config();
const jwt = require("jsonwebtoken");
require("dotenv").config();

const checkToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ msg: "Não autorizado" });
  }

  try {
    const secret = process.env.SECRET;

    jwt.verify(token, secret, { expiresIn: "30m" });

    next();
  } catch (error) {
    res.status(400).json({ msg: "Token inválido!" });
  }
};

module.exports = checkToken;
