// @ts-nocheck
const express = require("express");
const { authenticate } = require("../../middlewares");
const { getAllCustomers, getCustomer } = require("../../controllers/customers.js");

const router = express.Router();

router.get("/", authenticate, getAllCustomers);

router.get("/:_id", authenticate, getCustomer);

module.exports = router;
