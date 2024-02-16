const { login } = require("../services/login.service");
const { compare } = require("bcrypt");
const { sign } = require("jsonwebtoken");

module.exports = {
  loginUser: (req, res) => {
    const body = req.body;
    login(body.email, (err, results) => {
      if (err) {
        console.log(err);
      }
      if (!results) {
        return res.json({
          success: 0,
          data: "Invalid email or password",
        });
      }
      const result = compare(body.password, results.password);
      if (result) {
        results.password = undefined;
        const jsontoken = sign({ result: results }, process.env.SECRET_KEY , {
          expiresIn: "24h",
        });
        return res.json({
          success: 1,
          message: "login successfully",
          token: jsontoken,
        });
      } else {
        return res.json({
          success: 0,
          data: "Invalid email or password",
        });
      }
    });
  },
};
