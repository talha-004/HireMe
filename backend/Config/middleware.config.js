import cors from "cors";
import cookieParser from "cookie-parser";
import express from "express";
export const middlewareConfig = (app) => {
  app.use(
    cors({
      origin: "http://localhost:5173",
      credentials: true,
    })
  );
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());
};
