import express from "express";
import { isAuthenticated } from "../Middleware/auth.js";
import {
  getAdminJobs,
  getAllJobs,
  getJobById,
  postJob,
} from "../Controllers/job.controller.js";

const router = express.Router();

router.get("/get", getAllJobs);
router.get("/get/:id", getJobById);

// hr routes
router.post("/post", isAuthenticated, postJob);
router.get("/getAdminJobs", isAuthenticated, getAdminJobs);

export default router;
