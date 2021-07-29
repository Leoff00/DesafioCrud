const express = require("express");
const userController = require("../controller/userController");

const router = express.Router();

router.get("/users", userController.index);
router.get("/users/:id", userController.findById);
router.post("/create", userController.create);
router.put("/update/:id", userController.update);
router.delete("/delete/:id", userController.delete);

module.exports = router;
