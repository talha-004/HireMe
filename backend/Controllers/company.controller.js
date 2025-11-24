import { Company } from "../Models/company.model.js";

export const registerCompany = async (req, res) => {
  try {
    const { companyName } = req.body;

    if (!companyName) {
      return res
        .status(400)
        .json({ success: false, message: "Company name is required" });
    }

    let company = await Company.findOne({ name: companyName });
    if (company) {
      return res
        .status(400)
        .json({ success: false, message: "Company already registered" });
    }

    company = await Company.create({ name: companyName, userId: req.id });
    res.status(201).json({
      success: true,
      message: "Company registered successfully.",
      company,
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// get all companies of a user
export const getCompany = async (req, res) => {
  try {
    const userId = req.id;
    const companies = await Company.find({ userId });

    if (!companies) {
      return res
        .status(404)
        .json({ success: false, message: "No companies found" });
    }

    res.status(200).json({ success: true, companies });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

//get single company by id
export const getCompanyById = async (req, res) => {
  try {
    const { companyId } = req.params;
    const company = await Company.findById(companyId);

    if (!company) {
      return res
        .status(404)
        .json({ success: false, message: "Company not found" });
    }

    res.status(200).json({ success: true, company });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// update company details
export const updateCompany = async (req, res) => {
  try {
    const { name, description, website, location } = req.body;
    const file = req.file;

    // cloudinary upload can be added here
    // ....

    const updatedData = {
      name,
      description,
      website,
      location,
    };

    const company = await Company.findByIdAndUpdate(
      req.params.companyId,
      updatedData,
      { new: true }
    );

    if (!company) {
      return res
        .status(404)
        .json({ success: false, message: "Company not found" });
    }
    res.status(200).json({
      success: true,
      message: "Company updated successfully",
      company,
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
