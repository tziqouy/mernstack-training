const { register } = require("../services/register.service");
const { hashSync } = require("bcrypt");

module.exports = {
  registerUser: (req, res) => {
    const body = req.body;
    body.password = hashSync(body.password, 10);
    register(body, (err, results) => {
      if (err) {
        console.log(`There something wrong : ${err}`);
        res.status(400).json({
          success: 0,
          message: "Bad Request",
        });
      }
      res.status(200).json({
        success: 1,
        message: "New resource successfully registered",
        data: results,
      });
    });
  },
};
