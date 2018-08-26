const mongoose = require('mongoose');

// models for providers
const providersSchema = new mongoose.Schema({
  status: { type: Boolean, default: true },
  firstName: { type: String, required: [true, 'FirstName is required'] },
  lastName: { type: String, required: [true, 'LastName is required'] },
  fullName: String,
  city: { type: String, required: [true, 'City mail is required'] },
  address: String,
  email: { type: String, required: [true, 'Email is required'] },
  createdBy: { type: String, required: [true, 'CreatedBy is required'] },
  updatedBy: String,
  created_at: { type: Date, default: new Date() },
  updated_at: { type: Date },
  specialty: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, 'Specialty is Required']
  }
});

// models for specialties
const providersSpecialties = new mongoose.Schema({
  name: { type: String, required: [true, 'Name is required'] },
  updatedBy: { type: Number },
  createdAt: { type: Date, default: new Date() },
  updatedAt: { type: Date }
});

module.exports = {
  Providers: mongoose.model('Providers', providersSchema),
  Specialties: mongoose.model('Specialties', providersSpecialties)
};
