import express from "express";
import {
  login,
  logout,
  register,
  updateProfile,
} from "../Controllers/user.controller.js";
import { isAuthenticated } from "../Middleware/auth.js";
import { singleUpload } from "../Middleware/multer.js";

const router = express.Router();

router.post("/register", singleUpload, register);
router.post("/login", login);
router.post("/profile/update", isAuthenticated, singleUpload, updateProfile);
router.get("/profile/logout", isAuthenticated, logout);

export default router;
