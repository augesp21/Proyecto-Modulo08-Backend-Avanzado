import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  birthDate: {
    type: Date
  },
  role: {
    type: String,
    enum: ['admin', 'customer'],
    defaut: 'customer',
    required: true
  },
  phone: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  cardNumber: {
    type: String,
  },
  shippingAddress: {
    type: String,
    required: true
  }
})

export default mongoose.model('User', userSchema)