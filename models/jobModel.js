const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  location: String,
  description: String,
  salary: String,
  jobType: { type: String, enum: ['Full-time', 'Part-time', 'Contract', 'Internship', 'Other'] }
}, { timestamps: true });

module.exports = mongoose.model('Job', jobSchema);
