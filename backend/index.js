import express from "express";

import { env } from "./config/env.config.js";
import { connectDB } from "./config/db.connect.js";
import { middlewareConfig } from "./Config/middleware.config.js";
//
import userRoutes from "./Routes/user.route.js";

const app = express();

// global middlewares (cors, json, urlencoded, cookie-parser)
middlewareConfig(app);

// routes
app.get("/health", (req, res) => {
  res.status(200).send("Server is healthy 💚");
});

app.use("/api/v1/user", userRoutes);

// server start
const PORT = env.PORT || 8000;
app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on http://localhost:${PORT} ⭐`);
});
