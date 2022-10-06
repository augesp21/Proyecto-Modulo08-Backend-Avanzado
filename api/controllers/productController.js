import { Product } from "../models/index.js";

const createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    return res.status(201).json({
      msg: "Producto creado exitosamente",
      product,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error creando producto",
      error: error.message,
    });
  }
};

export { createProduct };
