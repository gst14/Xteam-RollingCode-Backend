const jwt = require("jsonwebtoken");

const jwtValidator = async (req, res, next) => {
  const token = req.headers["access-token"];

  if (token) {
    jwt.verify(token, process.env.SECRET_KEY, (err) => {
      if (err) {
        res.status(401).json({ msg: "Your token is not valid" });
      } else {
        next();
      }
    });
  } else {
    res.status(401).json({ msg: "Your token is not valid" });
  }
};

module.exports = { jwtValidator };
