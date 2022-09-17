const express = require("express");

const router = express.Router();

router
  .route("/")
  .get((req, res) => {})
  .post((req, res) => {})
  .put((res, res) => {})
  .delete((req, res) => {});

module.exports = router;
