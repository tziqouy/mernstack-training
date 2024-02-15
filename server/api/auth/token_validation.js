const jwt = require("jsonwebtoken");

module.exports = {
  validateToken: (req, res, next) => {
    const token = req.header("token");
    if (!token) return res.status(400).json({ error: "Access Denied" });

    try {
      const verified = jwt.verify(token, process.env.SECRET_KEY);
      req.user = verified;
      next();
    } catch (err) {
      res.status(400).json({ error: "Invalid Token" });
    }
  },
};
