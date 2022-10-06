import express from "express";
import { authRoutes, productRoutes } from "./routes/index.js";

const api = express();

api.use(express.json());

api.get("/status", (_, res) => {
  return res.json({
    msg: "Villa se la come",
  });
});

api.use(authRoutes);
api.use(productRoutes)

export default api;
