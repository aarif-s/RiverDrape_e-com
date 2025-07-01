// models/Admin.js
const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^\S+@gmail\.com$/, 'Only Gmail addresses are allowed'],
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: 'admin',
  },
}, { timestamps: true });

module.exports = mongoose.model('Admin', adminSchema);
