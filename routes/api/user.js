// @ts-nocheck
const express = require("express");
const { validateBody } = require("../../middlewares");
const { schemas } = require("../../models/user.js");
const { login } = require("../../controllers/auth.js");

const router = express.Router();

router.post("/login", validateBody(schemas.loginSchema), login);

module.exports = router;
