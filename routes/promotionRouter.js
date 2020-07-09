const express = require("express");
const bodyParser = require("body-parser");

const promotionRouter = express.Router();

promotionRouter.use(bodyParser.json());

promotionRouter
  .route("/")
  .get((req, res, next) => {})
  .post((req, res, next) => {})
  .put((req, res) => {})
  .delete((req, res, next) => {});

promotionRouter
  .route("/:promotionId")
  .get((req, res, next) => {})
  .post((req, res) => {})
  .put((req, res, next) => {})
  .delete((req, res, next) => {});

module.exports = promotionRouter;
