const { verify } = require("jsonwebtoken");

module.exports = {
  validateToken: (req, res, next) => {
    let token = req.get("authorization");
    if(token) {
      token = token.slice(7);
      verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if(err) {
          return res.json({
            success: 0,
            message: "Invalid Token"
          });
        } else {
          next();
        }
      });
    } else {
      return res.json({
        success: 0,
        message: "Access Denied! Unauthorized User"
      });
    }
  },
};
