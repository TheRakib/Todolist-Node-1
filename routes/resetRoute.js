const express = require("express");
const resetRouter = express.Router();

const {
  resetPassRender,
  resetSubmit,
  resetParams,
  resetFormSubmit,
} = require("../controller/resetPassword");

resetRouter.get("/reset", resetPassRender);

resetRouter.post("/reset", resetSubmit);

resetRouter.get("/reset/:token", resetParams);

resetRouter.post("/resetPassword", resetFormSubmit);


module.exports = resetRouter;