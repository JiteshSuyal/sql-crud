const userRoute = require("express").Router();
const userController = require("../controllers/user.controller");

// userRoute.post("/signUp", userController.signUp);

userRoute.post("/create", userController.create);

userRoute.delete("/del", userController.del);

userRoute.post("/update", userController.update);

userRoute.get("/getall", userController.read);

module.exports = userRoute;
