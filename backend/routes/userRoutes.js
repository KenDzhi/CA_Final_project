const express = require("express");
const router = express.Router();
const {
  getUsers,
  registerUser,
  loginUser,
  updateUserProfile,
  getUserProfile,
  writeReview,
  getUser,
  updateUser,
} = require("../controllers/userController");
const {
  verifyIsLoggedIn,
  verifyIsAdmin,
} = require("../middleware/verifyAuthToken");
const { route } = require("./productRoutes");

router.post("/register", registerUser);
router.post("/login", loginUser);

//Logged in user routes
router.use(verifyIsLoggedIn);
router.get("/profile/:id", getUserProfile);
router.put("/profile", updateUserProfile);
router.post("/review/:productId", writeReview);

//Admin routes
router.use(verifyIsAdmin);
router.get("/", getUsers);
router.get("/:id", getUser);
router.put("/:id", updateUser);

module.exports = router;
