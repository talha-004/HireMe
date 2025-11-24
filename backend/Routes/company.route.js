import express from "express";
import { isAuthenticated } from "../Middleware/auth.js";
import {
  getCompany,
  getCompanyById,
  registerCompany,
  updateCompany,
} from "../Controllers/company.controller.js";

const router = express.Router();

router.post("/register", isAuthenticated, registerCompany);
router.get("/get", isAuthenticated, getCompany);
router.get("/get/:companyId", isAuthenticated, getCompanyById);
router.put("/update/:companyId", isAuthenticated, updateCompany);

export default router;
