import { verifyToken } from "../Utils/jwtToken.js";

export const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "User not authenticated" });
    }
    const decoded = verifyToken(token);

    if (!decoded) {
      return res.status(401).json({ success: false, message: "Invalid token" });
    }

    req.id = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({ success: false, message: error.message });
  }
};
