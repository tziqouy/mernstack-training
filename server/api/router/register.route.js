const express = require("express");
const { registerUser } = require("../controllers/register.controller");
const router = require("express").Router();

router.post("/", registerUser);

module.exports = router;
