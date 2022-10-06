import mongoose from "mongoose";

const saleSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  Product: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  }
});

export default mongoose.model("Sale", saleSchema);