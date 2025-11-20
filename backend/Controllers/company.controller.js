import { Company } from "../Models/company.model";

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
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
