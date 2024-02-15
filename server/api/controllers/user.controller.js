const {
  getUsers,
  addUser,
  userGetById,
  userUpdate,
  userDelete,
} = require("../services/user.service");
const { genSaltSync, hashSync } = require("bcrypt");

module.exports = {
  getAllUsers: (req, res) => {
    getUsers((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  createUser: (req, res) => {
    const body = req.body;
    // const salt = genSaltSync(10);
    body.password = hashSync(body.password, 10);
    addUser(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  getUserById: (req, res) => {
    const id = req.params.id;
    userGetById(id, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Record not Found",
        });
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  updateUser: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    userUpdate(body, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        message: "updated successfully",
      });
    });
  },
  deleteUser: (req, res) => {
    const id = req.params.id;
    userDelete(id, (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          message: "Internal Server Error",
        });
      }
      if (!result) {
        return res.status(404).json({
          message: "Resource not Found",
        });
      }
      return res.status(200).json({
        message: "Resource successfully deleted",
        data: result,
      });
    });
  },
};
