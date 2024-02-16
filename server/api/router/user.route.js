const express = require("express");
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller");
const { validateToken } = require("../auth/token_validation");

const router = express.Router();

router.get("/", validateToken, getAllUsers);
router.post("/", validateToken, createUser);
router.get("/:id", validateToken, getUserById);
router.patch("/", validateToken, updateUser);
router.delete("/:id", validateToken, deleteUser);

module.exports = router;
