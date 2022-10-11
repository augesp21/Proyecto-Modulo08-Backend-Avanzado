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

const updateProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.json({
      msg: `Producto ${product.name} actualizado`,
    });
  } catch (error) {
    res.status(401).json({
      msg: "Error al actualizar producto",
    });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    return res.json({
      msg: "Productos encontrados",
      products,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Error al consultar productos",
      error,
    });
  }
};

const deleteProduct = async (req, res) => {
    const { id } = req.params
    try {
      const productDeleted = await Product.findByIdAndRemove(id)
      return res.json({
        msg: 'Producto eliminado',
        productDeleted
      })
    } catch (error) {
      res.status(500).json({
        msg: 'Error al eliminar producto',
        error
      })
    }
  }

export { createProduct, updateProduct, getAllProducts, deleteProduct };
