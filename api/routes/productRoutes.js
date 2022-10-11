import express from "express";
import { productController } from "../controllers/index.js";
import { authValidator } from "../middlewares/index.js";

const router = express.Router();

router
  .route("/products")
  .post(authValidator, productController.createProduct)
  .get(authValidator, productController.getAllProducts);

router
  .route("/products/:id")
  .put(authValidator, productController.updateProduct)
  .delete(authValidator, productController.deleteProduct);

export default router;
