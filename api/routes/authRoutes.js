import express from "express";
import { authController } from "../controllers/index.js";
import { authValidator } from "../middlewares/index.js";

const router = express.Router();

router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/users", authValidator, authController.getAllUsers);
router.put("/users/:id", authValidator, authController.deleteUser);
router.put("/update/:id", authController.updatePassword);

export default router;
