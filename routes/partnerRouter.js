const express = require("express");
const bodyParser = require("body-parser");

const partnerRouter = express.Router();

partnerRouter.use(bodyParser.json());

partnerRouter
  .route("/")
  .get((req, res, next) => {})
  .post((req, res, next) => {})
  .put((req, res) => {})
  .delete((req, res, next) => {});

partnerRouter
  .route("/:partnerId")
  .post((req, res) => {})
  .put((req, res, next) => {})
  .delete((req, res, next) => {});

module.exports = partnerRouter;
