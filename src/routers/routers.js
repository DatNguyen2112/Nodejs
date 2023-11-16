const express = require("express");
const homeController = require("../controllers/homeController");
const roomController = require("../controllers/roomController");

const router = express.Router();

const initConfigsRoutes = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/crud", homeController.getCRUD);
  router.get("/room", roomController.getCRUDRoom);
  router.post("/post-crud", homeController.postCRUD);
  router.post("/create-room", roomController.postCRUDRoom);
  //  ----------------------------------------------------
  router.get("/list-user", homeController.getListUser);
  router.get("/edit-user", homeController.getUserInfo);
  router.post("/update-user", homeController.updateUserInfo);
  router.get("/delete-user", homeController.deleteCRUD);
  return app.use("/", router);
};

module.exports = initConfigsRoutes;
