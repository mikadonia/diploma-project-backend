const Router = require("express").Router;
const userController = require("../controllers/user.controller");
const router = new Router();
const { body } = require("express-validator");
const authMiddleware = require("../middleware/auth.middleware");

router.get("/", (req, res) => {
  console.log('req');
  return res.send("It's service!");
});

router.post(
  "/registration",
  body("email").isEmail(),
  body("password").isLength({ min: 8, max: 32 }),
  userController.registration
);

//Client router
router.get("/refresh", userController.refresh);
router.post("/login", userController.login);
router.post("/logout", userController.logout);
router.get("/users", authMiddleware, userController.getUsers);

module.exports = router;
