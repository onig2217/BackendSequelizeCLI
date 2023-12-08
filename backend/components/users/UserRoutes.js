const express = require("express");
const router = express.Router();

// const auth = require('../middleware/auth');
// const multer = require('../middleware/multer-config');
const usersCtrl = require("./UserController");

router.get("/users", usersCtrl.getAllUsers);

router.use("/api", router);

module.exports = router;
