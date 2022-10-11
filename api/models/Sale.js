import mongoose from "mongoose";

const saleSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  cart: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cart"
  }
});

export default mongoose.model("Sale", saleSchema);