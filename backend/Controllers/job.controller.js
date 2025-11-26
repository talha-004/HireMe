import { Job } from "../Models/job.model.js";

// get all jobs for job seeker with search functionality
export const getAllJobs = async (req, res) => {
  try {
    const keyword = req.query.keyword || "";

    const query = {
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } },
      ],
    };

    const jobs = await Job.find(query)
      .populate({
        path: "company",
      })
      .sort({ createdAt: -1 });

    if (jobs.length === 0) {
      return res.status(404).json({ message: "No jobs found" });
    }

    res.status(200).json({ success: true, jobs });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// get job by id for job seeker
export const getJobById = async (req, res) => {
  try {
    const jobId = req.params.id;

    const job = await Job.findById(jobId).populate({
      path: "company",
    });

    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }
    return res.status(200).json({ success: true, job });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// ========== HR  ========== //

// hr post a job
export const postJob = async (req, res) => {
  try {
    const {
      title,
      description,
      requirements,
      salary,
      location,
      jobType,
      experience,
      positions,
      companyId,
    } = req.body;

    const userId = req.id;

    if (
      !title ||
      !description ||
      !requirements ||
      !salary ||
      !location ||
      !jobType ||
      !experience ||
      !positions ||
      !companyId
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const job = await Job.create({
      title,
      description,
      requirements: requirements.split(",").map((req) => req.trim()),
      salary: Number(salary),
      location,
      jobType,
      experienceLevel: experience,
      positions,
      company: companyId,
      created_by: userId,
    });

    return res.status(201).json({ message: "Job posted successfully", job });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// hr total created jobs
export const getAdminJobs = async (req, res) => {
  try {
    const adminId = req.id;

    const jobs = await Job.find({ created_by: adminId });
    if (jobs.length === 0) {
      return res.status(404).json({ message: "No jobs found" });
    }
    return res.status(200).json({ success: true, jobs });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
