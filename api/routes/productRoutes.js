import express from "express";
import { productController } from "../controllers/index.js";
import { authValidator } from "../middlewares/index.js";

const router = express.Router();

router.post("/products", authValidator, productController.createProduct);

export default router;
