import { Application } from "../Models/application.model.js";
import { Job } from "../Models/job.model.js";

export const applyJob = async (req, res) => {
  try {
    const userId = req.id;
    const { id: jobId } = req.params; // both are same
    // const jobId = req.params.id;

    if (!jobId) {
      return res.status(400).json({ message: "Job ID is required" });
    }

    //check if job exists
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    //check if user has already applied for the job
    const existingApplication = await Application.findOne({
      job: jobId,
      applicant: userId,
    });
    if (existingApplication) {
      return res.status(400).json({
        success: false,
        message: "You have already applied for this job",
      });
    }

    //create new application
    const newApplication = await Application.create({
      job: jobId,
      applicant: userId,
    });

    job.applications.push(newApplication._id);

    await job.save();

    res.status(201).json({
      success: true,
      message: "Application submitted successfully",
      application: newApplication,
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

export const getAppliedJobs = async (req, res) => {
  try {
    const userId = req.id;
    const application = await Application.find({ applicant: userId })
      .sort({
        createdAt: -1,
      })
      .populate({
        path: "job",
        options: { sort: { createdAt: -1 } },
        populate: { path: "company", options: { sort: { createdAt: -1 } } },
      });

    if (application.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No application found" });
    }
    res.status(200).json({ success: true, application });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// ========== HR  ========== //

//get full details of applicants for a specific job
export const getApplicantsForJob = async (req, res) => {
  try {
    const { id: jobId } = req.params;

    const job = await Job.findById(jobId).populate({
      path: "applications",
      options: { sort: { createdAt: -1 } },
      populate: { path: "applicant", options: { sort: { createdAt: -1 } } },
    });

    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }
    res.status(200).json({ success: true, job });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

export const updateStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const applicationId = req.params.id;
    if (!status) {
      return res.status(400).json({ message: "Status is required" });
    }
    if (!["pending", "accepted", "rejected"].includes(status.toLowerCase())) {
      return res.status(400).json({ message: "Invalid status value" });
    }

    //getting aplication by id
    const application = await Application.findOne({ _id: applicationId });
    if (!application) {
      return res
        .status(404)
        .json({ succedss: false, message: "Application not found" });
    }

    //update status
    application.status = status.toLowerCase();
    await application.save();

    return res.status(200).json({
      success: true,
      message: "Application status updated successfully",
      application,
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
