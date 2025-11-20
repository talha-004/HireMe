import express from "express";
import {
  login,
  logout,
  register,
  updateProfile,
} from "../Controllers/user.controller.js";
import { isAuthenticated } from "../Middleware/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/profile/update", isAuthenticated, updateProfile);
router.get("/profile/logout", isAuthenticated, logout);

export default router;
