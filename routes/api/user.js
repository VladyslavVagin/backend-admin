// @ts-nocheck
const express = require("express");
const { validateBody } = require("../../middlewares");
const { schemas } = require("../../models/user.js");
const { login, register } = require("../../controllers/auth.js");

const router = express.Router();

router.post("/register", validateBody(schemas.registerSchema), register);

router.post("/login", validateBody(schemas.loginSchema), login);

module.exports = router;
