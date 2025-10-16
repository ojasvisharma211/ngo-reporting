const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  total: { type: Number, default: 0 },
  processed: { type: Number, default: 0 },
  status: { type: String, default: 'processing' }, // processing, completed, failed
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Job', jobSchema);
