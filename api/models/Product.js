import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  specs: String,
  description: {
    type: String,
    required: true,
  },
  supplier: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Product", productSchema);
