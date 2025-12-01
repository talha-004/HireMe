import express from "express";
import { isAuthenticated } from "../Middleware/auth.js";
import {
  applyJob,
  getApplicantsForJob,
  getAppliedJobs,
  updateStatus,
} from "../Controllers/application.controller.js";

const router = express.Router();

router.get("/get", isAuthenticated, getAppliedJobs);
router.post("/apply/:id", isAuthenticated, applyJob);

// ========= HR  ========== //
router.get("/:id/applicants", isAuthenticated, getApplicantsForJob);
router.put("/status/:id", isAuthenticated, updateStatus);

export default router;
